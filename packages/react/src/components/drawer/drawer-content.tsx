import * as DialogPrimitive from "@radix-ui/react-dialog";
import { fadeIn, fadeOut, keyframes, styled } from "@vista-ui/core";
import type React from "react";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";

export type DrawerContentProps = PolymorphicComponentProps<
  typeof DrawerContent
>;

export type DrawerContentRootProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;

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
  height: "100%",
  overflowY: "auto",
  p: "$28",
});

export const DrawerContent = forwardRef<DrawerContentRootProps, "div">(
  ({ children, onOpenAutoFocus, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent
        ref={ref}
        onOpenAutoFocus={(event: Event) => {
          event.preventDefault();
          onOpenAutoFocus?.(event);
        }}
        {...props}
      >
        <StyledScrollArea>{children}</StyledScrollArea>
      </StyledContent>
    </DialogPrimitive.Portal>
  )
);
