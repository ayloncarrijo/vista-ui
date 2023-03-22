import React from "react";
import type {
  ForwardRefComponent,
  ForwardRefRenderFunction,
} from "../types/forward-ref";

export const forwardRef = React.forwardRef as <Props, DefaultAs>(
  render: ForwardRefRenderFunction<Props, DefaultAs>
) => ForwardRefComponent<Props, DefaultAs>;
