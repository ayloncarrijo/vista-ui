import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled } from "@you-ui/core";
import type React from "react";
import { iconButtonShape, stateLayerHook } from "../../css";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { FormLabel } from "../form-label";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";
import { WrapIf } from "../wrap-if";

export type CheckboxProps = PolymorphicComponentProps<typeof Checkbox>;

export type CheckboxRootProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
> & {
  label?: string;
  error?: boolean;
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
        borderColor: "CurrentColor",
      },
      "&:enabled": {
        "&[data-error='false']": {
          color: "$onSurfaceVariant",
        },
        "&[data-error='true']": {
          color: "$error",
        },
      },
      "&:disabled": {
        color: "$disabledContent",
      },
    },
    "&[data-state='checked'], &[data-state='indeterminate']": {
      "&:enabled": {
        "&[data-error='false']": {
          [String(StateLayer)]: {
            color: "$primary",
          },
          [String(StyledContainer)]: {
            backgroundColor: "$primary",
            color: "$onPrimary",
          },
        },
        "&[data-error='true']": {
          [String(StateLayer)]: {
            color: "$error",
          },
          [String(StyledContainer)]: {
            backgroundColor: "$error",
            color: "$onError",
          },
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
  (
    {
      label,
      disabled = false,
      error = false,
      checked,
      defaultChecked,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState({
      initialState: false,
      propValue: checked,
      defaultPropValue: defaultChecked,
      onChange: onCheckedChange,
    });

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
        <StyledRoot
          ref={ref}
          checked={isChecked}
          onCheckedChange={setIsChecked}
          disabled={disabled}
          data-error={error}
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
      </WrapIf>
    );
  }
);
