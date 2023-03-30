import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled } from "@you-ui/core";
import { iconButtonShape, stateLayerHook } from "../../css";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type CheckboxProps = PolymorphicComponentProps<typeof Checkbox>;

export type CheckboxRootProps = CheckboxPrimitive.CheckboxProps & {
  error: boolean;
};

const StyledContainer = styled("div", {
  width: 18,
  height: 18,
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledRoot = styled(
  CheckboxPrimitive.Root,
  iconButtonShape,
  stateLayerHook,
  {
    "&[data-state='unchecked']": {
      [String(StyledContainer)]: {
        borderWidth: "$2",
      },
      "&:enabled[data-error='false']": {
        color: "$onSurface",
        [String(StyledContainer)]: {
          borderColor: "$onSurface",
        },
      },
      "&:enabled[data-error='true']": {
        color: "$error",
        [String(StyledContainer)]: {
          borderColor: "$error",
        },
      },
      "&:disabled": {
        [String(StyledContainer)]: {
          borderColor: "$disabledContent",
        },
      },
    },
    "&[data-state='checked'], &[data-state='indeterminate']": {
      "&:enabled[data-error='false']": {
        color: "$primary",
        [String(StyledContainer)]: {
          backgroundColor: "$primary",
          color: "$onPrimary",
        },
      },
      "&:enabled[data-error='true']": {
        color: "$error",
        [String(StyledContainer)]: {
          backgroundColor: "$error",
          color: "$onError",
        },
      },
      "&:disabled": {
        [String(StyledContainer)]: {
          backgroundColor: "$disabledContent",
          color: "$surface",
        },
      },
    },
  }
);

export const Checkbox = forwardRef<CheckboxRootProps, "button">(
  ({ error, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useControllableState({
      initialState: false,
      propValue: checked,
      defaultPropValue: defaultChecked,
      onChange: onCheckedChange,
    });

    return (
      <StyledRoot
        ref={ref}
        data-error={error}
        checked={isChecked}
        onCheckedChange={setIsChecked}
        {...props}
      >
        <StyledContainer>
          <StyledIndicator>
            <Icon size="sm">
              {isChecked === "indeterminate" ? "remove" : "check"}
            </Icon>
          </StyledIndicator>
        </StyledContainer>
        <StateLayer />
      </StyledRoot>
    );
  }
);
