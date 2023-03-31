import { styled } from "@you-ui/core";
import Spinner from "../../assets/icons/spinner.svg";
import { stateLayerHook } from "../../css";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Box } from "../box";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type ButtonProps = PolymorphicComponentProps<typeof Button>;

export type ButtonRootProps = {
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  startIcon?: string;
  endIcon?: string;
  fullWidth?: boolean;
  loading?: boolean;
};

const StyledRoot = styled("button", stateLayerHook, {
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
  userSelect: "none",
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
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export const Button = forwardRef<ButtonRootProps, "button">(
  (
    {
      variant = "filled",
      startIcon,
      endIcon,
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => (
    <StyledRoot
      ref={ref}
      variant={variant}
      disabled={loading || disabled}
      {...props}
    >
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

        <span>{children}</span>

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
    </StyledRoot>
  )
);
