import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { scaleDown, scaleUp, styled } from "@you-ui/core";
import { iconButtonShape, stateLayerHook } from "../../css";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { StateLayer } from "../state-layer";

export type RadioProps = PolymorphicComponentProps<typeof Radio>;

export type RadioRootProps = RadioGroupPrimitive.RadioGroupItemProps;

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
      color: "$onSurfaceVariant",
      [String(StyledIndicator)]: {
        animation: `${String(scaleDown)} $easeIn`,
      },
    },
    "&[data-state='checked']": {
      color: "$primary",
      [String(StyledIndicator)]: {
        animation: `${String(scaleUp)} $easeOut`,
      },
    },
    "&:disabled": {
      color: "$disabledContent",
    },
  }
);

export const Radio = forwardRef<RadioRootProps, "button">((props, ref) => (
  <StyledRoot ref={ref} {...props}>
    <StyledContainer>
      <StyledIndicator />
    </StyledContainer>
    <StateLayer />
  </StyledRoot>
));
