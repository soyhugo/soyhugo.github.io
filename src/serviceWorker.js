// Minimal service worker stub for development builds.
// The original CRA template exported register() and unregister() helpers.
// This stub provides the same API surface but does nothing, preventing
// build-time errors when the file was removed.

// No-op register — kept for compatibility if you later add a real SW.
export function register() {
  // intentionally empty
}

// No-op unregister
export function unregister() {
  // intentionally empty
}

// Also provide a default export for older imports (not used here)
const serviceWorker = { register, unregister };
export default serviceWorker;
