import { isFunction } from "@ayloncarrijo/utilities";
import React from "react";
import { useLatestRef } from "../use-latest-ref";

type UseControllableStateParams<T> = {
  initialState: T | (() => T);
  propValue?: T;
  defaultPropValue?: T;
  onChange?: (value: T) => void;
};

export const useControllableState = <T,>(
  params: UseControllableStateParams<T>
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const { initialState, propValue, defaultPropValue = initialState } = params;

  const paramsRef = useLatestRef(params);

  const [internalValue, setInternalValue] = React.useState(defaultPropValue);

  const prevInternalValue = React.useRef(internalValue);

  const isControlled = propValue !== undefined;

  const value = isControlled ? propValue : internalValue;

  const setValue = React.useCallback<React.Dispatch<React.SetStateAction<T>>>(
    (state) => {
      const { onChange, propValue } = paramsRef.current;

      const isControlled = propValue !== undefined;

      if (isControlled) {
        const newValue = isFunction(state) ? state(propValue) : state;

        if (newValue !== propValue) {
          onChange?.(newValue);
        }
      } else {
        setInternalValue(state);
      }
    },
    [paramsRef]
  );

  React.useEffect(() => {
    if (internalValue !== prevInternalValue.current) {
      const { onChange } = paramsRef.current;
      onChange?.(internalValue);
      prevInternalValue.current = internalValue;
    }
  }, [paramsRef, internalValue]);

  return [value, setValue];
};
