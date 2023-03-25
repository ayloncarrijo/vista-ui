import React from "react";
import type {
  PolymorphicComponent,
  PolymorphicRenderFunction,
} from "../types/forward-ref";

export const forwardRef = React.forwardRef as <Props, DefaultAs>(
  render: PolymorphicRenderFunction<Props, DefaultAs>
) => PolymorphicComponent<Props, DefaultAs>;
