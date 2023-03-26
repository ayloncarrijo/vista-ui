import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { fadeIn, fadeOut, styled } from "@you-ui/core";
import { forwardRef } from "../../utils/forward-ref";

export interface TooltipProps extends TooltipPrimitive.TooltipProps {
  content: React.ReactNode;
}

const TooltipContent = styled(TooltipPrimitive.Content, {
  background: "$inverseSurface",
  color: "$inverseOnSurface",
  typography: "$bodySm",
  borderRadius: "$sm",
  maxWidth: "$256",
  py: "$8",
  px: "$12",
  "&[data-state='delayed-open']": {
    animation: `${fadeIn.name} 150ms ease-out`,
  },
  "&[data-state='closed']": {
    animation: `${fadeOut.name} 150ms ease-in`,
  },
});

export const Tooltip = forwardRef<TooltipProps, "div">(
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
      <TooltipContent ref={ref} sideOffset={8} {...props}>
        {content}
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
);
