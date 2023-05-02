import { styled } from "@vista-ui/core";
import { forwardRef } from "../../utils/forward-ref";
import { Label, type LabelProps } from "../label";

export type FormLabelProps = React.ComponentProps<typeof FormLabel>;

export type FormLabelRootProps = LabelProps & {
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

export const FormLabel = forwardRef<FormLabelRootProps, "label">(
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
  ) => (
    <StyledRoot
      ref={ref}
      side={side}
      data-disabled={disabled}
      data-error={error}
      {...props}
    >
      {children}
      <span>{label}</span>
    </StyledRoot>
  )
);
