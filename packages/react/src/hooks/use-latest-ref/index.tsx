import React from "react";

export const useLatestRef = <T,>(value: T): React.MutableRefObject<T> => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref;
};
