import React from "react";
import type {
  PolymorphicComponent,
  PolymorphicRenderFn,
} from "../types/forward-ref";

export const forwardRef = React.forwardRef as <Props, DefaultAs>(
  render: PolymorphicRenderFn<Props, DefaultAs>
) => PolymorphicComponent<Props, DefaultAs>;
