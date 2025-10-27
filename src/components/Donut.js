import React, { useEffect, useRef, useState } from "react";
import "../styles/Donut.css";

// ASCII Donut animation rendered into a <pre> using a z-buffer.
// Based on the classic torus demo by Andy Sloane, adapted to JS/React.

const Donut = () => {
  const preRef = useRef(null);
  const [grid, setGrid] = useState({ rows: 24, cols: 80 });

  // Measure the inner viewport (.donut-inner) and compute rows/cols responsively
  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const measure = () => {
      // measure the inner square, not the <pre>
      const containerEl = pre.parentElement || pre;
      const rect = containerEl.getBoundingClientRect();

      // get computed font metrics from #donut
      const cs = getComputedStyle(pre);
      const fontSizePx = parseFloat(cs.fontSize) || 12; // rows use this because line-height = 1em

      // precise char width (no guessing 0.62)
      function measureCharWidth() {
        const probe = document.createElement("span");
        probe.style.whiteSpace = "pre";
        probe.style.fontFamily = cs.fontFamily;
        probe.style.fontSize = cs.fontSize;
        probe.textContent = "MMMMMMMMMM"; // 10 monospace chars
        pre.appendChild(probe);
        const w = probe.getBoundingClientRect().width / 10;
        pre.removeChild(probe);
        return w;
      }
      const charW = measureCharWidth();

      // small safety buffer to avoid last row/col clipping
      const COLS = Math.max(40, Math.floor(rect.width / charW) - 2);
      const ROWS = Math.max(20, Math.floor(rect.height / fontSizePx) - 2);

      setGrid({ rows: ROWS, cols: COLS });
    };

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(measure);
      ro.observe(pre.parentElement || pre); // observe containerEl
    }
    measure();
    return () => ro && ro.disconnect();
  }, []);

  // Animation loop uses the measured grid only
  useEffect(() => {
    let A = 0;
    let B = 0;
    let rafId;
    let lastTs = performance.now();

    const render = (ts) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000); // seconds, clamp to avoid jumps
      lastTs = ts;
      const pre = preRef.current;
      if (!pre) return;

      // grid size
      const COLS = grid.cols;
      const ROWS = grid.rows;

      // clamp scale to fit min(COLS, ROWS) with a margin
      const SCALE = 0.65 * Math.min(COLS, ROWS); // tweak 0.40–0.48 if needed
      const X0 = (COLS / 2) | 0;
      const Y0 = (ROWS / 2) | 0;

      // Constants
  const theta_spacing = 0.07;
  const phi_spacing = 0.02;
      const R1 = 1;
      const R2 = 2;
      const K2 = 5;

      // Buffers
      const zbuffer = new Array(COLS * ROWS).fill(0);
      const output = new Array(COLS * ROWS).fill(" ");
      const luminanceChars = ".,-~:;=!*#$@";

      const cosA = Math.cos(A), sinA = Math.sin(A);
      const cosB = Math.cos(B), sinB = Math.sin(B);

      for (let theta = 0; theta < Math.PI * 2; theta += theta_spacing) {
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);
        for (let phi = 0; phi < Math.PI * 2; phi += phi_spacing) {
          const cosphi = Math.cos(phi);
          const sinphi = Math.sin(phi);

          const circlex = R2 + R1 * costheta;
          const circley = R1 * sintheta;

          const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * (cosA * sinB);
          const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * (cosA * cosB);
          const z = K2 + cosA * circlex * sinphi + circley * sinA;
          const ooz = 1 / z;
          // normalized projection in [-?, ?]
          const projX = x * ooz;
          const projY = y * ooz;
          // map to integer screen space, centered with margin-safe scale
          const sx = (X0 + SCALE * projX) | 0;
          const sy = (Y0 - SCALE * projY) | 0; // minus = up

          const L =
            cosphi * costheta * sinB -
            cosA * costheta * sinphi -
            sinA * sintheta +
            cosB * (cosA * sintheta - costheta * sinA * sinphi);

          if (L > 0 && sx >= 0 && sx < COLS && sy >= 0 && sy < ROWS) {
            const idx = sx + sy * COLS;
            if (ooz > zbuffer[idx]) {
              zbuffer[idx] = ooz;
              const luminance_index = Math.min(
                luminanceChars.length - 1,
                Math.floor(L * 8)
              );
              output[idx] = luminanceChars[luminance_index];
            }
          }
        }
      }

      // Dump buffer to string
      let s = "";
      for (let j = 0; j < ROWS; j++) {
        const start = j * COLS;
        s += output.slice(start, start + COLS).join("") + "\n";
      }
      pre.textContent = s;

      // advance rotation (rad/s)
      const omegaA = 0.8; // slower spin
      const omegaB = 0.4;
      A += omegaA * dt;
      B += omegaB * dt;
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [grid.cols, grid.rows]);

  return (
    <div className="donut-wrap">
      <div className="donut-inner">
        <pre id="donut" ref={preRef} aria-hidden="true" />
      </div>
    </div>
  );
};

export default Donut;
