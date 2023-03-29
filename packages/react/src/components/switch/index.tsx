import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "@you-ui/core";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer, stateLayerHook } from "../state-layer";

export type SwitchProps = PolymorphicComponentProps<typeof Switch>;

export type RootSwitchProps = SwitchPrimitive.SwitchProps;

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  width: "$24",
  height: "$24",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$full",
  position: "relative",
  transition: "translate $easeOut",
  "&[data-state='unchecked']": {
    translate: "$4",
  },
  "&[data-state='checked']": {
    translate: "$24",
  },
});

const StyledThumbBackground = styled("div", {
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  transition: "scale $easeOut, background-color $easeOut",
  "[data-state='unchecked'] &": {
    backgroundColor: "$outline",
  },
  "[data-state='checked'] &": {
    backgroundColor: "$onPrimary",
  },
});

const StyledThumbIcon = styled(Icon, {
  position: "relative",
  "[data-state='unchecked'] &": {
    color: "$surfaceContainerHighest",
  },
  "[data-state='checked'] &": {
    color: "$onPrimaryContainer",
  },
});

const StyledStateLayer = styled(StateLayer, {
  inset: "-$8",
  "[data-state='unchecked'] &": {
    color: "$onSurface",
  },
  "[data-state='checked'] &": {
    color: "$primary",
  },
});

const StyledRoot = styled(SwitchPrimitive.Root, stateLayerHook, {
  width: "$52",
  height: "$32",
  borderRadius: "$full",
  userSelect: "none",
  "&[data-state='unchecked']": {
    ring: "$2",
    ringInset: true,
    ringColor: "$outline",
    backgroundColor: "$surfaceContainerHighest",
    "&:hover, &:active": {
      [`${StyledThumbBackground.selector}`]: {
        backgroundColor: "$onSurfaceVariant",
      },
    },
  },
  "&[data-state='checked']": {
    backgroundColor: "$primary",
    "&:hover, &:active": {
      [`${StyledThumbBackground.selector}`]: {
        backgroundColor: "$primaryContainer",
      },
    },
  },
  "&:disabled": {
    "&[data-state='unchecked']": {
      ringColor: "$disabledContainer",
      backgroundColor: "$surfaceContainerHighest/$opacities$disabledContainer",
      [`${StyledThumbBackground.selector}`]: {
        backgroundColor: "$disabledContent",
      },
      [`${StyledThumbIcon.selector}`]: {
        color: "$surfaceContainerHighest/$opacities$disabledContent",
      },
    },
    "&[data-state='checked']": {
      backgroundColor: "$disabledContainer",
      [`${StyledThumbBackground.selector}`]: {
        backgroundColor: "$surface",
      },
      [`${StyledThumbIcon.selector}`]: {
        color: "$disabledContent",
      },
    },
  },
  [`&:active ${StyledThumbBackground.selector}`]: {
    scale: "1.16667",
  },
});

export const Switch = forwardRef<RootSwitchProps, "button">(
  ({ checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useControllableState({
      initialState: false,
      propValue: checked,
      defaultPropValue: defaultChecked,
      onChange: onCheckedChange,
    });

    return (
      <StyledRoot
        ref={ref}
        checked={isChecked}
        onCheckedChange={setIsChecked}
        {...props}
      >
        <StyledThumb>
          <StyledThumbBackground />
          <StyledThumbIcon size="xs">
            {isChecked ? "check" : "close"}
          </StyledThumbIcon>
          <StyledStateLayer />
        </StyledThumb>
      </StyledRoot>
    );
  }
);
