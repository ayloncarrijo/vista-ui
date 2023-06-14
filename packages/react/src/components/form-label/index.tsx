import React from "react";
import { styled } from "../../utils/styled";
import { Label } from "../label";
import { Slottable } from "../slot";

export type FormLabelProps = React.ComponentProps<typeof StyledRoot> & {
  label: string;
  side?: "top" | "right" | "bottom" | "left";
  disabled?: boolean;
  error?: boolean;
};

const StyledRoot = styled(Label, {
  display: "inline-flex",
  alignItems: "center",
  typography: "$bodyMd",
  lineHeight: "normal",
  "&[data-disabled='false']": {
    "&[data-error='false']": {
      color: "$onSurface",
    },
    "&[data-error='true']": {
      color: "$error",
    },
  },
  "&[data-disabled='true']": {
    color: "$disabledContent",
    pointerEvents: "none",
  },
  variants: {
    side: {
      top: {
        flexDirection: "column-reverse",
      },
      right: {
        flexDirection: "row",
      },
      bottom: {
        flexDirection: "column",
      },
      left: {
        flexDirection: "row-reverse",
      },
    },
  },
});

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      children,
      label,
      side = "right",
      disabled = false,
      error = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledRoot
        ref={ref}
        side={side}
        data-disabled={disabled}
        data-error={error}
        {...props}
      >
        <Slottable inherit={children}>
          {(child) => (
            <>
              {child}
              <span>{label}</span>
            </>
          )}
        </Slottable>
      </StyledRoot>
    );
  }
);

FormLabel.displayName = "FormLabel";
