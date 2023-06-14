import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { fadeIn, fadeOut } from "@vista-ui/core";
import React from "react";
import { styled } from "../../utils/styled";

export type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> &
  React.ComponentProps<typeof StyledContent> & {
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

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
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
  ) => {
    return (
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
    );
  }
);

Tooltip.displayName = "Tooltip";

export * from "./tooltip-provider";
