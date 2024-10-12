export const schedule = (cb: () => void) => {
  if (globalThis.requestIdleCallback !== undefined) {
    const handler = requestIdleCallback(cb);
    return () => {
      cancelIdleCallback(handler);
    };
  } else {
    const handler = setTimeout(cb, 0);
    return () => {
      clearTimeout(handler);
    };
  }
};
