import React from "react";
import { useControllableState } from "../../hooks/use-controllable-state";
import { assignRef } from "../../utils/assign-ref";
import { styled } from "../../utils/styled";
import { Icon } from "../icon";
import { Label } from "../label";

export type TextInputProps = React.ComponentProps<typeof StyledInput> & {
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

const StyledInputArea = styled("div", {
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
  "&:-webkit-autofill": {
    WebkitBackgroundClip: "text",
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

const StyledHelperArea = styled("div", {
  minHeight: "$lineHeights$bodySm",
  mt: "$4",
  px: "$16",
  display: "flex",
  gap: "$16",
  typography: "$bodySm",
  color: "$onSurfaceVariant",
});

const StyledCharCount = styled("p", {
  whiteSpace: "nowrap",
  ml: "auto",
});

const StyledIcon = styled("div", {
  display: "flex",
  color: "$onSurfaceVariant",
  "&[data-error='true']": {
    color: "$error",
  },
});

const StyledRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  pt: "$8",
  "&[data-start-icon='true']": {
    [String(StyledInputArea)]: {
      pl: "$12",
    },
    [String(StyledLabel)]: {
      $$translateX: "48px",
    },
  },
  "&[data-end-icon='true']": {
    [String(StyledInputArea)]: {
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
    [String(StyledHelperArea)]: {
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
    [String(StyledHelperArea)]: {
      color: "$disabledContent",
    },
    [String(StyledIcon)]: {
      color: "$disabledContent",
    },
  },
});

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
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
        <StyledInputArea
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              event.preventDefault();
              inputRef.current?.focus();
            }
          }}
        >
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
        </StyledInputArea>
        <StyledHelperArea>
          {hasCaption && <p>{caption}</p>}
          {maxLength != null && (
            <StyledCharCount>
              {value.length} / {maxLength}
            </StyledCharCount>
          )}
        </StyledHelperArea>
      </StyledRoot>
    );
  }
);

TextInput.displayName = "TextInput";
