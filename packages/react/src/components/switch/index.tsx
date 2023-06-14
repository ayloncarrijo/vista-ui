import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";
import { stateLayerHook } from "../../css";
import { useControllableState } from "../../hooks/use-controllable-state";
import { styled } from "../../utils/styled";
import { FormLabel } from "../form-label";
import { Icon } from "../icon";
import { Slottable } from "../slot";
import { StateLayer } from "../state-layer";
import { WrapIf } from "../wrap-if";

export type SwitchProps = React.ComponentProps<typeof StyledRoot> & {
  label?: string;
};

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  width: "$24",
  height: "$24",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  position: "relative",
  transition: "translate $easeOut",
});

const StyledThumbBackground = styled("div", {
  zIndex: -1,
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  transition: "scale $easeOut, background-color $easeOut",
});

const StyledRoot = styled(SwitchPrimitive.Root, stateLayerHook, {
  width: "$52",
  height: "$32",
  borderRadius: "$full",
  userSelect: "none",
  "&[data-state='unchecked']": {
    ring: "$2",
    ringInset: true,
    [String(StyledThumb)]: {
      translate: "$4",
    },
    [String(StateLayer)]: {
      color: "$onSurface",
    },
    "&:enabled": {
      ringColor: "$outline",
      backgroundColor: "$surfaceContainerHighest",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$outline",
      },
      [String(Icon)]: {
        color: "$surfaceContainerHighest",
      },
    },
    "&:disabled": {
      ringColor: "$disabledContainer",
      backgroundColor: "$surfaceContainerHighest/$opacities$disabledContainer",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$disabledContent",
      },
      [String(Icon)]: {
        color: "$surfaceContainerHighest/$opacities$disabledContent",
      },
    },
    "&:hover, &:active": {
      [String(StyledThumbBackground)]: {
        backgroundColor: "$onSurfaceVariant",
      },
    },
  },
  "&[data-state='checked']": {
    [String(StyledThumb)]: {
      translate: "$24",
    },
    [String(StateLayer)]: {
      color: "$primary",
    },
    "&:enabled": {
      backgroundColor: "$primary",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$onPrimary",
      },
      [String(Icon)]: {
        color: "$onPrimaryContainer",
      },
    },
    "&:disabled": {
      backgroundColor: "$disabledContainer",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$surface",
      },
      [String(Icon)]: {
        color: "$disabledContent",
      },
    },
    "&:hover, &:active": {
      [String(StyledThumbBackground)]: {
        backgroundColor: "$primaryContainer",
      },
    },
  },
  [`&:active ${String(StyledThumbBackground)}`]: {
    scale: "1.16667",
  },
});

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      children,
      label,
      disabled = false,
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
                  side="left"
                  disabled={disabled}
                  css={{ gap: "$8" }}
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
          {...props}
        >
          <Slottable inherit={children}>
            {() => (
              <StyledThumb>
                <StyledThumbBackground />
                <Icon size="xs">{isChecked ? "check" : "close"}</Icon>
                <StateLayer css={{ inset: "-$8" }} />
              </StyledThumb>
            )}
          </Slottable>
        </StyledRoot>
      </WrapIf>
    );
  }
);

Switch.displayName = "Switch";
