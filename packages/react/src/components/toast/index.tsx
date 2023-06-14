import * as ToastPrimitive from "@radix-ui/react-toast";
import { fadeOut, keyframes } from "@vista-ui/core";
import React from "react";
import { styled } from "../../utils/styled";
import { Slottable } from "../slot";

export type ToastProps = React.ComponentProps<typeof StyledRoot> & {
  message: string;
};

const slideIn = keyframes({
  "0%": {
    translate: "calc(-100% - $$viewportPadding)",
  },
  "100%": {
    translate: "0px",
  },
});

const slideOut = keyframes({
  "0%": {
    translate: "var(--radix-toast-swipe-end-x)",
  },
  "100%": {
    translate: "calc(-100% - $$viewportPadding)",
  },
});

const StyledRoot = styled(ToastPrimitive.Root, {
  width: "100%",
  minHeight: "$48",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "$16",
  px: "$16",
  py: "$12",
  borderRadius: "$xs",
  boxShadow: "$elevation3",
  typography: "$bodyMd",
  backgroundColor: "$inverseSurface",
  color: "$inverseOnSurface",
  "&[data-state='open']": {
    animation: `${String(slideIn)} $easeOut`,
  },
  "&[data-state='closed']": {
    animation: `${String(fadeOut)} $easeIn`,
  },
  "&[data-swipe='move']": {
    translate: "var(--radix-toast-swipe-move-x)",
  },
  "&[data-swipe='cancel']": {
    translate: "0px",
    transition: "translate $easeOut",
  },
  "&[data-swipe='end']": {
    animation: `${String(slideOut)} $easeIn`,
  },
});

export const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  ({ message, children, ...props }, ref) => {
    return (
      <StyledRoot ref={ref} {...props}>
        <Slottable inherit={children}>
          {(child) => (
            <>
              <ToastPrimitive.Description>{message}</ToastPrimitive.Description>
              {child}
            </>
          )}
        </Slottable>
      </StyledRoot>
    );
  }
);

Toast.displayName = "Toast";

export * from "./toast-action";
export * from "./toast-provider";
export * from "./toast-viewport";
