import type { LeftJoin } from "@ayloncarrijo/utilities";
import type { Css } from "@you-ui/core";

// TODO: Review performance of generic constraints
// https://github.com/microsoft/TypeScript/issues/53035

interface StitchesProps<As> {
  as?: As;
  css?: Css;
}

export type PropsWithAs<Props, As> = As extends React.ElementType
  ? LeftJoin<Props, React.ComponentPropsWithoutRef<As>> & StitchesProps<As>
  : never;

export type ComponentRef<As> = As extends React.ElementType
  ? React.ComponentRef<As>
  : never;

export type DefaultAs<T> = T extends ForwardRefComponent<unknown, infer As>
  ? As
  : never;

export type ForwardRefRenderFunction<Props, As> = (
  props: PropsWithAs<Props, As>,
  ref: React.ForwardedRef<ComponentRef<As>>
) => React.ReactElement | null;

export type ForwardRefComponent<Props, DefaultAs> = <As = DefaultAs>(
  props: PropsWithAs<Props, As> & React.RefAttributes<ComponentRef<As>>
) => React.ReactElement | null;
