import * as DialogPrimitive from "@radix-ui/react-dialog";
import { fadeIn, fadeOut, keyframes } from "@vista-ui/core";
import React from "react";
import { styled } from "../../utils/styled";
import { Slottable } from "../slot";

export type DrawerContentProps = React.ComponentProps<typeof StyledContent>;

export const slideIn = keyframes({
  "0%": { translate: "-100%" },
  "100%": { translate: "0%" },
});

export const slideOut = keyframes({
  "0%": { translate: "0%" },
  "100%": { translate: "-100%" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  zIndex: "$drawer",
  position: "fixed",
  inset: 0,
  backgroundColor: "$scrim/$opacities$scrim",
  '&[data-state="open"]': {
    animation: `${String(fadeIn)} $easeOut`,
  },
  '&[data-state="closed"]': {
    animation: `${String(fadeOut)} $easeIn`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  zIndex: "$drawer",
  position: "fixed",
  top: 0,
  right: "$48",
  bottom: 0,
  left: 0,
  maxWidth: "$352",
  overflow: "hidden",
  backgroundColor: "$surfaceContainerLow",
  boxShadow: "$elevation1",
  borderTopRightRadius: "$lg",
  borderBottomRightRadius: "$lg",
  '&[data-state="open"]': {
    animation: `${String(slideIn)} $easeOut`,
  },
  '&[data-state="closed"]': {
    animation: `${String(slideOut)} $easeIn`,
  },
});

const StyledScrollArea = styled("div", {
  overflowY: "auto",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$$contentPadding",
  p: "$$contentPadding",
  $$contentPadding: "$space$28",
});

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({ onCloseAutoFocus, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent
      ref={ref}
      onCloseAutoFocus={(event) => {
        event.preventDefault();
        onCloseAutoFocus?.(event);
      }}
      {...props}
    >
      <Slottable inherit={children}>
        {(child) => <StyledScrollArea>{child}</StyledScrollArea>}
      </Slottable>
    </StyledContent>
  </DialogPrimitive.Portal>
));

DrawerContent.displayName = "DrawerContent";
