import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { fadeIn, fadeOut, styled } from "@you-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";

export type TooltipProps = PolymorphicComponentProps<typeof Tooltip>;

export interface RootTooltipProps extends TooltipPrimitive.TooltipProps {
  content: React.ReactNode;
}

const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  zIndex: "$tooltip",
  position: "relative",
  typography: "$bodySm",
  borderRadius: "$sm",
  maxWidth: "$256",
  py: "$8",
  px: "$12",
  backgroundColor: "$inverseSurface",
  color: "$inverseOnSurface",
  "&[data-state='delayed-open']": {
    animation: `${fadeIn.name} $easeOut`,
  },
  "&[data-state='closed']": {
    animation: `${fadeOut.name} $easeIn`,
  },
});

export const Tooltip = forwardRef<RootTooltipProps, "div">(
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
      <StyledTooltipContent ref={ref} sideOffset={8} {...props}>
        {content}
      </StyledTooltipContent>
    </TooltipPrimitive.Root>
  )
);
