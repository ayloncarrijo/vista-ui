import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { fadeIn, fadeOut, styled } from "@you-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";

export type TooltipProps = PolymorphicComponentProps<typeof Tooltip>;

export type TooltipRootProps = React.ComponentProps<
  typeof TooltipPrimitive.Root
> &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    content: React.ReactNode;
  };

const StyledContent = styled(TooltipPrimitive.Content, {
  zIndex: "$tooltip",
  position: "relative",
  typography: "$bodySm",
  borderRadius: "$xs",
  maxWidth: "$256",
  py: "$8",
  px: "$12",
  backgroundColor: "$inverseSurface",
  color: "$inverseOnSurface",
  "&[data-state='delayed-open']": {
    animation: `${String(fadeIn)} $easeOut`,
  },
  "&[data-state='closed']": {
    animation: `${String(fadeOut)} $easeIn`,
  },
});

export const Tooltip = forwardRef<TooltipRootProps, "div">(
  (
    {
      content,
      children,
      open,
      defaultOpen,
      onOpenChange,
      delayDuration,
      disableHoverableContent,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <StyledContent ref={ref} sideOffset={8} {...props}>
        {content}
      </StyledContent>
    </TooltipPrimitive.Root>
  )
);

export * from "./tooltip-provider";
