import * as DialogPrimitive from "@radix-ui/react-dialog";
import { fadeIn, fadeOut, keyframes, styled } from "@you-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";

export type DrawerContentProps = PolymorphicComponentProps<
  typeof DrawerContent
>;

export type DrawerContentRootProps = DialogPrimitive.DialogContentProps;

export const slideIn = keyframes({
  "0%": { translate: "-100%" },
  "100%": { translate: "0%" },
});

export const slideOut = keyframes({
  "0%": { translate: "0%" },
  "100%": { translate: "-100%" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
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
  maxWidth: 360,
  p: "$28",
  position: "fixed",
  top: 0,
  right: 64,
  bottom: 0,
  left: 0,
  overflowY: "auto",
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

export const DrawerContent = forwardRef<DrawerContentRootProps, "div">(
  ({ children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent ref={ref} {...props}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  )
);
