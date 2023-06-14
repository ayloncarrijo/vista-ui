import React from "react";
import { iconButtonShape, stateLayerHook } from "../../css";
import { styled } from "../../utils/styled";
import { Icon } from "../icon";
import { Slottable } from "../slot";
import { StateLayer } from "../state-layer";
import { Tooltip } from "../tooltip";

export type IconButtonProps = Omit<
  React.ComponentProps<typeof StyledRoot>,
  "variant" | "toggle"
> & {
  label: string;
  variant?: "filled" | "tonal" | "outlined" | "standard";
  toggle?: "no-toggle" | "unselected" | "selected";
  offset?: boolean;
  tooltip?: boolean;
};

const TOGGLE_DEFAULTS = {
  filled: "selected",
  tonal: "selected",
  outlined: "unselected",
  standard: "unselected",
} as const;

const StyledRoot = styled("button", iconButtonShape, stateLayerHook, {
  variants: {
    variant: {
      filled: {
        "&:disabled": {
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      tonal: {
        "&:disabled": {
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      outlined: {},
      standard: {
        "&:disabled": {
          color: "$disabledContent",
        },
      },
    },
    toggle: {
      unselected: {},
      selected: {},
    },
    offset: {
      true: {
        display: "flex",
        m: "-$8",
      },
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      toggle: "unselected",
      css: {
        backgroundColor: "$surfaceContainerHighest",
        color: "$primary",
      },
    },
    {
      variant: "filled",
      toggle: "selected",
      css: {
        backgroundColor: "$primary",
        color: "$onPrimary",
      },
    },
    {
      variant: "tonal",
      toggle: "unselected",
      css: {
        backgroundColor: "$surfaceContainerHighest",
        color: "$onSurfaceVariant",
      },
    },
    {
      variant: "tonal",
      toggle: "selected",
      css: {
        backgroundColor: "$secondaryContainer",
        color: "$onSecondaryContainer",
      },
    },
    {
      variant: "outlined",
      toggle: "unselected",
      css: {
        ring: "$1",
        ringInset: true,
        ringColor: "$outline",
        color: "$onSurfaceVariant",
        "&:disabled": {
          ringColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
    },
    {
      variant: "outlined",
      toggle: "selected",
      css: {
        backgroundColor: "$inverseSurface",
        color: "$inverseOnSurface",
        "&:disabled": {
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
    },
    {
      variant: "standard",
      toggle: "unselected",
      css: {
        color: "$onSurfaceVariant",
      },
    },
    {
      variant: "standard",
      toggle: "selected",
      css: {
        color: "$primary",
      },
    },
  ],
});

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      label,
      variant = "standard",
      toggle = "no-toggle",
      offset,
      tooltip = true,
      ...props
    },
    ref
  ) => {
    return (
      <Tooltip content={label} open={tooltip ? undefined : false}>
        <StyledRoot
          ref={ref}
          variant={variant}
          toggle={toggle === "no-toggle" ? TOGGLE_DEFAULTS[variant] : toggle}
          offset={offset}
          aria-label={label}
          {...props}
        >
          <Slottable inherit={children}>
            {(child) => (
              <>
                <Icon variant={toggle === "selected" ? "filled" : "outlined"}>
                  {child}
                </Icon>
                <StateLayer />
              </>
            )}
          </Slottable>
        </StyledRoot>
      </Tooltip>
    );
  }
);

IconButton.displayName = "IconButton";
