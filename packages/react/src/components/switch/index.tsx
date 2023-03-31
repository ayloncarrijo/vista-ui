import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "@you-ui/core";
import { stateLayerHook } from "../../css";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { FormLabel } from "../form-label";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type SwitchProps = PolymorphicComponentProps<typeof Switch>;

export type SwitchRootProps = SwitchPrimitive.SwitchProps & {
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

export const Switch = forwardRef<SwitchRootProps, "button">(
  (
    { label, disabled, checked, defaultChecked, onCheckedChange, ...props },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState({
      initialState: false,
      propValue: checked,
      defaultPropValue: defaultChecked,
      onChange: onCheckedChange,
    });

    const content = (
      <StyledRoot
        ref={ref}
        checked={isChecked}
        onCheckedChange={setIsChecked}
        disabled={disabled}
        {...props}
      >
        <StyledThumb>
          <StyledThumbBackground />
          <Icon size="xs">{isChecked ? "check" : "close"}</Icon>
          <StateLayer css={{ inset: "-$8" }} />
        </StyledThumb>
      </StyledRoot>
    );

    return label != null ? (
      <FormLabel
        label={label}
        side="left"
        disabled={disabled}
        css={{ gap: "$8" }}
      >
        {content}
      </FormLabel>
    ) : (
      content
    );
  }
);
