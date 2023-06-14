import { keyframes } from "@stitches/core";

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const scaleUp = keyframes({
  "0%": { scale: "0" },
  "100%": { scale: "1" },
});

export const scaleDown = keyframes({
  "0%": { scale: "1" },
  "100%": { scale: "0" },
});
