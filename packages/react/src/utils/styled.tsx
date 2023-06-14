import { css } from "@vista-ui/core";
import React from "react";
import { Slot } from "../components/slot";
import type { StyledComponentProps, StyledFunction } from "../types/styled";

export const styled: StyledFunction = (component, ...composers) => {
  const internalCss = css(component as "span", ...composers);

  const displayName =
    typeof component === "string"
      ? component
      : component.displayName ?? component.name;

  const StyledComponent = React.forwardRef<
    HTMLElement,
    Record<string, unknown> & StyledComponentProps
  >(({ asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : component;

    const { props: forwardProps, deferredInjector: Injector } = internalCss(
      props
    ) as ReturnType<typeof internalCss> & {
      deferredInjector?: () => null;
    };

    return (
      <>
        <Component ref={ref} {...forwardProps} />
        {Injector != null && <Injector />}
      </>
    );
  });

  StyledComponent.displayName = `Styled.${displayName}`;

  return Object.assign(StyledComponent, {
    ...internalCss,
    toString: () => internalCss.selector,
  });
};
