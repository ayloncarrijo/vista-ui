import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { scaleDown, scaleUp, styled } from "@you-ui/core";
import { iconButtonShape, stateLayerHook } from "../../css";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { FormLabel } from "../form-label";
import { StateLayer } from "../state-layer";

export type RadioProps = PolymorphicComponentProps<typeof Radio>;

export type RadioRootProps = RadioGroupPrimitive.RadioGroupItemProps & {
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
  ({ label, disabled, error, ...props }, ref) => {
    const content = (
      <StyledRoot ref={ref} disabled={disabled} data-error={error} {...props}>
        <StyledContainer>
          <StyledIndicator />
        </StyledContainer>
        <StateLayer />
      </StyledRoot>
    );

    return label != null ? (
      <FormLabel
        label={label}
        side="right"
        disabled={disabled}
        error={error}
        css={{ gap: "$4" }}
      >
        {content}
      </FormLabel>
    ) : (
      content
    );
  }
);
