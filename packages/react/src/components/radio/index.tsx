import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { scaleDown, scaleUp, styled } from "@vista-ui/core";
import { iconButtonShape, stateLayerHook } from "../../css";
import { forwardRef } from "../../utils/forward-ref";
import { FormLabel } from "../form-label";
import { StateLayer } from "../state-layer";
import { WrapIf } from "../wrap-if";

export type RadioProps = React.ComponentProps<typeof Radio>;

export type RadioRootProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> & {
  label?: string;
  error?: boolean;
};

const StyledContainer = styled("div", {
  width: "$20",
  height: "$20",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  borderWidth: "$2",
  borderColor: "CurrentColor",
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  width: 10,
  height: 10,
  borderRadius: "$full",
  backgroundColor: "CurrentColor",
});

const StyledRoot = styled(
  RadioGroupPrimitive.Item,
  iconButtonShape,
  stateLayerHook,
  {
    "&[data-state='unchecked']": {
      [String(StyledIndicator)]: {
        animation: `${String(scaleDown)} $easeIn`,
      },
      "&:enabled": {
        "&[data-error='false']": {
          color: "$onSurfaceVariant",
        },
        "&[data-error='true']": {
          color: "$error",
        },
      },
    },
    "&[data-state='checked']": {
      [String(StyledIndicator)]: {
        animation: `${String(scaleUp)} $easeOut`,
      },
      "&:enabled": {
        "&[data-error='false']": {
          color: "$primary",
        },
        "&[data-error='true']": {
          color: "$error",
        },
      },
    },
    "&:disabled": {
      color: "$disabledContent",
    },
  }
);

export const Radio = forwardRef<RadioRootProps, "button">(
  ({ label, disabled = false, error = false, ...props }, ref) => {
    return (
      <WrapIf
        wrappers={[
          label != null
            ? (child) => (
                <FormLabel
                  label={label}
                  side="right"
                  disabled={disabled}
                  error={error}
                  css={{ gap: "$4" }}
                >
                  {child}
                </FormLabel>
              )
            : null,
        ]}
      >
        <StyledRoot ref={ref} disabled={disabled} data-error={error} {...props}>
          <StyledContainer>
            <StyledIndicator />
          </StyledContainer>
          <StateLayer />
        </StyledRoot>
      </WrapIf>
    );
  }
);
