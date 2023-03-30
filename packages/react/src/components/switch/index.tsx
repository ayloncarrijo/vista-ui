import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "@you-ui/core";
import { stateLayerHook } from "../../css";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type SwitchProps = PolymorphicComponentProps<typeof Switch>;

export type SwitchRootProps = SwitchPrimitive.SwitchProps;

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
    ringColor: "$outline",
    backgroundColor: "$surfaceContainerHighest",
    [String(StyledThumb)]: {
      translate: "$4",
    },
    [String(StyledThumbBackground)]: {
      backgroundColor: "$outline",
    },
    [String(Icon)]: {
      color: "$surfaceContainerHighest",
    },
    [String(StateLayer)]: {
      color: "$onSurface",
    },
    "&:hover, &:active": {
      [String(StyledThumbBackground)]: {
        backgroundColor: "$onSurfaceVariant",
      },
    },
  },
  "&[data-state='checked']": {
    backgroundColor: "$primary",
    [String(StyledThumb)]: {
      translate: "$24",
    },
    [String(StyledThumbBackground)]: {
      backgroundColor: "$onPrimary",
    },
    [String(Icon)]: {
      color: "$onPrimaryContainer",
    },
    [String(StateLayer)]: {
      color: "$primary",
    },
    "&:hover, &:active": {
      [String(StyledThumbBackground)]: {
        backgroundColor: "$primaryContainer",
      },
    },
  },
  "&:disabled": {
    "&[data-state='unchecked']": {
      ringColor: "$disabledContainer",
      backgroundColor: "$surfaceContainerHighest/$opacities$disabledContainer",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$disabledContent",
      },
      [String(Icon)]: {
        color: "$surfaceContainerHighest/$opacities$disabledContent",
      },
    },
    "&[data-state='checked']": {
      backgroundColor: "$disabledContainer",
      [String(StyledThumbBackground)]: {
        backgroundColor: "$surface",
      },
      [String(Icon)]: {
        color: "$disabledContent",
      },
    },
  },
  [`&:active ${String(StyledThumbBackground)}`]: {
    scale: "1.16667",
  },
});

export const Switch = forwardRef<SwitchRootProps, "button">(
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
          <Icon size="xs">{isChecked ? "check" : "close"}</Icon>
          <StateLayer css={{ inset: "-$8" }} />
        </StyledThumb>
      </StyledRoot>
    );
  }
);
