import { isFunction } from "@ayloncarrijo/utilities";
import type React from "react";

export const assignRef = <T>(
  ...refs: Array<React.ForwardedRef<T> | null | undefined>
) => {
  return (instance: T) => {
    refs.forEach((ref) => {
      if (ref != null) {
        if (isFunction(ref)) {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }
    });
  };
};
