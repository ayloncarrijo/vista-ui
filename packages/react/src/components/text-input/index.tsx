import { styled } from "@you-ui/core";
import React from "react";
import { useControllableState } from "../../hooks/use-controllable-state";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { assignRef } from "../../utils/assign-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { Label } from "../label";

export type TextInputProps = PolymorphicComponentProps<typeof TextInput>;

export type TextInputRootProps = {
  id: string;
  label: string;
  helper?: string;
  error?: string;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const StyledInputRoot = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "$12",
  p: "$16",
  cursor: "text",
});

const StyledInput = styled("input", {
  width: "100%",
  display: "block",
  outline: "none",
  resize: "none",
  backgroundColor: "transparent",
  typography: "$bodyLg",
  color: "$onSurface",
  "&:disabled": {
    color: "$disabledContent",
  },
});

const StyledLabel = styled(Label, {
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none",
  color: "$onSurfaceVariant",
  typography: "$bodyLg",
  transition: "translate $easeOut, scale $easeOut",
  transformOrigin: "left center",
  translate: "$$translateX $$translateY",
  $$translateX: "16px",
  $$translateY: "16px",
});

const StyledFieldset = styled("fieldset", {
  position: "absolute",
  inset: 0,
  top: "calc($lineHeights$bodySm / 2 * -1)",
  px: "calc($12 - $$borderWidth)",
  pointerEvents: "none",
  borderRadius: "$xs",
  borderColor: "$outline",
  borderWidth: "$$borderWidth",
  $$borderWidth: "$borderWidths$1",
});

const StyledLegend = styled("legend", {
  width: "0px",
  opacity: 0,
  whiteSpace: "nowrap",
  typography: "$bodySm",
});

const StyledHelperRoot = styled("div", {
  minHeight: "$lineHeights$bodySm",
  mt: "$4",
  px: "$16",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$16",
  typography: "$bodySm",
  color: "$onSurfaceVariant",
});

const StyledCaption = styled("p", {
  gridColumn: "1",
});

const StyledCharCount = styled("p", {
  whiteSpace: "nowrap",
  gridColumn: "2",
});

const StyledIcon = styled("div", {
  display: "flex",
  color: "$onSurfaceVariant",
  "&[data-error='true']": {
    color: "$error",
  },
});

const StyledRoot = styled("div", {
  display: "inline-flex",
  flexDirection: "column",
  "&[data-start-icon='true']": {
    [String(StyledInputRoot)]: {
      pl: "$12",
    },
    [String(StyledLabel)]: {
      $$translateX: "48px",
    },
  },
  "&[data-end-icon='true']": {
    [String(StyledInputRoot)]: {
      pr: "$12",
    },
  },
  "&[data-populated='true'], &[data-focused='true']": {
    [String(StyledLegend)]: {
      width: "auto",
      px: "$4",
    },
    [String(StyledLabel)]: {
      $$translateX: "16px",
      $$translateY: "-50%",
      scale: "0.75",
    },
  },
  "&[data-focused='true']": {
    [String(StyledFieldset)]: {
      $$borderWidth: "$borderWidths$2",
      borderColor: "$primary",
    },
    [String(StyledLabel)]: {
      color: "$primary",
    },
  },
  "&[data-error='true']": {
    [String(StyledFieldset)]: {
      borderColor: "$error",
    },
    [String(StyledLabel)]: {
      color: "$error",
    },
    [String(StyledHelperRoot)]: {
      color: "$error",
    },
  },
  "&[data-disabled='true']": {
    [String(StyledFieldset)]: {
      borderColor: "$disabledContainer",
    },
    [String(StyledLabel)]: {
      color: "$disabledContent",
    },
    [String(StyledHelperRoot)]: {
      color: "$disabledContent",
    },
    [String(StyledIcon)]: {
      color: "$disabledContent",
    },
  },
});

export const TextInput = forwardRef<TextInputRootProps, "input">(
  (
    {
      id,
      maxLength,
      label,
      helper,
      error,
      disabled = false,
      startIcon,
      endIcon: endIconFromProps,
      value: valueFromProps,
      defaultValue,
      onValueChange,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const [value, setValue] = useControllableState({
      initialState: "",
      propValue: valueFromProps,
      defaultPropValue: defaultValue,
      onChange: onValueChange,
    });

    const [isFocused, setIsFocused] = React.useState(false);

    const isPopulated = Boolean(value);

    const hasError = Boolean(error);

    const caption = hasError ? error : helper;

    const hasCaption = Boolean(caption);

    const endIcon = hasError ? "error" : endIconFromProps;

    const hasStartIcon = Boolean(startIcon);

    const hasEndIcon = Boolean(endIcon);

    return (
      <StyledRoot
        data-populated={isPopulated}
        data-focused={isFocused}
        data-error={hasError}
        data-disabled={disabled}
        data-start-icon={hasStartIcon}
        data-end-icon={hasEndIcon}
      >
        <StyledInputRoot onClick={() => inputRef.current?.focus()}>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledFieldset>
            <StyledLegend>{label}</StyledLegend>
          </StyledFieldset>
          {hasStartIcon && (
            <StyledIcon>
              <Icon>{startIcon}</Icon>
            </StyledIcon>
          )}
          <StyledInput
            ref={assignRef(inputRef, ref)}
            id={id}
            maxLength={maxLength}
            disabled={disabled}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              onChange?.(event);
            }}
            onFocus={(event) => {
              setIsFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setIsFocused(false);
              onBlur?.(event);
            }}
            {...props}
          />
          {hasEndIcon && (
            <StyledIcon data-error={hasError}>
              <Icon variant={hasError ? "filled" : "outlined"}>{endIcon}</Icon>
            </StyledIcon>
          )}
        </StyledInputRoot>
        <StyledHelperRoot>
          {hasCaption && <StyledCaption>{caption}</StyledCaption>}
          {maxLength != null && (
            <StyledCharCount>
              {value.length} / {maxLength}
            </StyledCharCount>
          )}
        </StyledHelperRoot>
      </StyledRoot>
    );
  }
);
