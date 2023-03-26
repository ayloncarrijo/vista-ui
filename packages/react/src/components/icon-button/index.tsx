import { styled } from "@you-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer, stateLayerHook } from "../state-layer";
import { Tooltip } from "../tooltip";

export type IconButtonProps = PolymorphicComponentProps<typeof IconButton>;

export interface RootIconButtonProps {
  icon: string;
  label: string;
  variant?: "filled" | "tonal" | "outlined" | "standard";
  toggle?: "no-toggle" | "unselected" | "selected";
}

const TOGGLE_DEFAULTS = {
  filled: "selected",
  tonal: "selected",
  outlined: "unselected",
  standard: "unselected",
} as const;

const StyledButton = styled("button", stateLayerHook, {
  width: "$40",
  height: "$40",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  borderRadius: "$full",
  "&::before": {
    content: "",
    position: "absolute",
    inset: "-$4",
  },
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

export const IconButton = forwardRef<RootIconButtonProps, "button">(
  (
    { icon, label, variant = "standard", toggle = "no-toggle", ...props },
    ref
  ) => (
    <Tooltip content={label}>
      <StyledButton
        ref={ref}
        variant={variant}
        toggle={toggle === "no-toggle" ? TOGGLE_DEFAULTS[variant] : toggle}
        aria-label={label}
        {...props}
      >
        <Icon variant={toggle === "selected" ? "filled" : "outlined"}>
          {icon}
        </Icon>
        <StateLayer />
      </StyledButton>
    </Tooltip>
  )
);
