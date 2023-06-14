import { isFunction, isObject, isString } from "@ayloncarrijo/utilities";
import React from "react";
import { assignRef } from "../../utils/assign-ref";

export type SlotProps = React.HTMLAttributes<HTMLElement>;

type SlotCloneProps = React.PropsWithChildren;

type SlottableProps = {
  inherit: React.ReactNode;
  children: (child: React.ReactNode) => JSX.Element;
};

const isSlottable = (
  child: React.ReactNode
): child is React.ReactElement<SlottableProps> =>
  React.isValidElement(child) && child.type === Slottable;

const mergeProps = (
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
): Record<string, unknown> => {
  return {
    ...slotProps,
    ...Object.fromEntries(
      Object.keys(childProps).map((prop) => {
        const isHandler = /^on[A-Z]/.test(prop);
        const slotValue = slotProps[prop];
        const childValue = childProps[prop];

        if (isHandler && isFunction(slotValue)) {
          if (isFunction(childValue)) {
            return [
              prop,
              (...args: Array<never>) => {
                childValue(...args);
                slotValue(...args);
              },
            ];
          }

          return [prop, slotValue];
        }

        if (prop === "style" && isObject(slotValue) && isObject(childValue)) {
          return [prop, { ...slotValue, ...childValue }];
        }

        if (
          prop === "className" &&
          isString(slotValue) &&
          isString(childValue)
        ) {
          return [prop, [slotValue, childValue].filter(Boolean).join(" ")];
        }

        return [prop, childValue];
      })
    ),
  };
};

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (isSlottable(children)) {
      const slottable = children;

      return (
        <SlotClone ref={ref} {...props}>
          {React.isValidElement<React.PropsWithChildren>(
            slottable.props.inherit
          )
            ? React.cloneElement(
                slottable.props.inherit,
                undefined,
                slottable.props.children(slottable.props.inherit.props.children)
              )
            : null}
        </SlotClone>
      );
    }

    return (
      <SlotClone ref={ref} {...props}>
        {children}
      </SlotClone>
    );
  }
);

Slot.displayName = "Slot";

const SlotClone = React.forwardRef<HTMLElement, SlotCloneProps>(
  ({ children, ...props }, ref) => {
    React.Children.only(children);

    return React.isValidElement<Record<string, unknown>>(children)
      ? React.cloneElement(children, {
          ...mergeProps(props, children.props),
          ref: assignRef(
            ref,
            (children as { ref?: React.ForwardedRef<HTMLElement> }).ref
          ),
        })
      : null;
  }
);

SlotClone.displayName = "SlotClone";

export const Slottable = ({
  inherit,
  children,
}: SlottableProps): JSX.Element => {
  return children(inherit);
};
