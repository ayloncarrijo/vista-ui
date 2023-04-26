import * as ToastPrimitive from "@radix-ui/react-toast";
import { styled } from "@you-ui/core";
import type React from "react";

export type ToastViewportProps = React.ComponentProps<typeof ToastViewport>;

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  zIndex: "$toast",
  position: "fixed",
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  gap: "$16",
  p: "$$viewportPadding",
  $$viewportPadding: "$space$16",
  "@sm": {
    maxWidth: "$384",
  },
});
