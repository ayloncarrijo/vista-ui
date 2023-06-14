import * as ToastPrimitive from "@radix-ui/react-toast";
import type React from "react";
import { styled } from "../../utils/styled";

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
