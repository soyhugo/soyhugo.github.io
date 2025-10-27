import { useEffect, useState } from "react";

const phrases = [
  "Hey, Hugo here",
  "CS @ Drexel | SE + AI/ML",
  "I build useful things that ship"
];

export default function TypewriterText({ className = "" }) {
  const [i, setI] = useState(0);        // which phrase
  const [t, setT] = useState("");       // typed substring
  const [dir, setDir] = useState(1);    // 1 = typing, -1 = erasing
  const typingMs = 55, pauseMs = 1200, eraseMs = 30;

  useEffect(() => {
    const full = phrases[i];
    if (dir === 1) {
      if (t.length < full.length) {
        const id = setTimeout(() => setT(full.slice(0, t.length + 1)), typingMs);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setDir(-1), pauseMs);
      return () => clearTimeout(id);
    } else {
      if (t.length > 0) {
        const id = setTimeout(() => setT(full.slice(0, t.length - 1)), eraseMs);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => {
        setI((i + 1) % phrases.length);
        setDir(1);
      }, 250);
      return () => clearTimeout(id);
    }
  }, [t, dir, i]);

  return (
    <span className={className}>
      {t}
      <span className="tw-cursor">|</span>
    </span>
  );
}
