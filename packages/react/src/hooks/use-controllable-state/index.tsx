import { isFunction } from "@ayloncarrijo/utilities";
import React from "react";
import { useUpdatableRef } from "../use-updatable-ref";

type UseControllableStateParams<T> = {
  initialState: T | (() => T);
  propValue?: T;
  defaultPropValue?: T;
  onChange?: (value: T) => void;
};

export const useControllableState = <T,>(
  params: UseControllableStateParams<T>
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const { initialState, propValue, defaultPropValue } = params;

  const paramsRef = useUpdatableRef(params);

  const [internalValue, setInternalValue] = React.useState(
    defaultPropValue !== undefined ? defaultPropValue : initialState
  );

  const isControlled = propValue !== undefined;

  const value = isControlled ? propValue : internalValue;

  const setValue = React.useCallback<React.Dispatch<React.SetStateAction<T>>>(
    (state) => {
      const { onChange, propValue } = paramsRef.current;

      const isControlled = propValue !== undefined;

      if (isControlled) {
        const newValue = isFunction(state) ? state(propValue) : state;
        onChange?.(newValue);
      } else {
        setInternalValue(state);
      }
    },
    [paramsRef]
  );

  React.useEffect(() => {
    const { onChange, propValue } = paramsRef.current;

    const isControlled = propValue !== undefined;

    if (!isControlled) {
      onChange?.(internalValue);
    }
  }, [internalValue, paramsRef]);

  return [value, setValue];
};
