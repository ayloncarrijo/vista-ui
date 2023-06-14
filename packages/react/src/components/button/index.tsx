import React from "react";
import Spinner from "../../assets/icons/spinner.svg";
import { stateLayerHook } from "../../css";
import { styled } from "../../utils/styled";
import { Box } from "../box";
import { Icon } from "../icon";
import { Slottable } from "../slot";
import { StateLayer } from "../state-layer";

export type ButtonProps = React.ComponentProps<typeof StyledRoot> & {
  loading?: boolean;
  startIcon?: string;
  endIcon?: string;
};

const StyledRoot = styled("button", stateLayerHook, {
  whiteSpace: "nowrap",
  userSelect: "none",
  minWidth: "$48",
  height: "$40",
  px: "$24",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  transition: "box-shadow $easeOut",
  typography: "$labelLg",
  lineHeight: "normal",
  variants: {
    variant: {
      elevated: {
        boxShadow: "$elevation1",
        backgroundColor: "$surfaceContainerLow",
        color: "$primary",
        "&:hover": {
          boxShadow: "$elevation2",
        },
        "&:disabled": {
          boxShadow: "none",
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      filled: {
        backgroundColor: "$primary",
        color: "$onPrimary",
        "&:hover": {
          boxShadow: "$elevation1",
        },
        "&:disabled": {
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      tonal: {
        backgroundColor: "$secondaryContainer",
        color: "$onSecondaryContainer",
        "&:hover": {
          boxShadow: "$elevation1",
        },
        "&:disabled": {
          backgroundColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      outlined: {
        ring: "$1",
        ringInset: true,
        ringColor: "$outline",
        color: "$primary",
        "&:disabled": {
          ringColor: "$disabledContainer",
          color: "$disabledContent",
        },
      },
      text: {
        px: "$12",
        color: "$primary",
        "&:disabled": {
          color: "$disabledContent",
        },
      },
    },
    inverse: {
      true: {
        color: "$inversePrimary",
      },
    },
    offset: {
      true: {
        display: "flex",
        mx: "-$12",
        my: "-$8",
      },
    },
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      startIcon,
      endIcon,
      loading = false,
      inverse = false,
      offset,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledRoot
        ref={ref}
        variant={variant}
        inverse={inverse}
        offset={offset}
        disabled={loading || disabled}
        {...props}
      >
        <Slottable inherit={children}>
          {(child) => (
            <>
              <Box
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: loading ? 0 : 1,
                }}
              >
                {Boolean(startIcon) && (
                  <Icon
                    size="sm"
                    css={{ ml: variant === "text" ? 0 : "-$8", mr: "$8" }}
                  >
                    {startIcon}
                  </Icon>
                )}

                <span>{child}</span>

                {Boolean(endIcon) && (
                  <Icon
                    size="sm"
                    css={{ mr: variant === "text" ? 0 : "-$8", ml: "$8" }}
                  >
                    {endIcon}
                  </Icon>
                )}
              </Box>

              {loading && (
                <Box css={{ position: "absolute" }}>
                  <Spinner width={24} height={24} />
                </Box>
              )}

              <StateLayer />
            </>
          )}
        </Slottable>
      </StyledRoot>
    );
  }
);

Button.displayName = "Button";
