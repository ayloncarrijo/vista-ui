import type { LeftJoin } from "@ayloncarrijo/utilities";
import type { Css } from "@you-ui/core";

// TODO: Review performance of generic constraints
// https://github.com/microsoft/TypeScript/issues/53035

export type StitchesProps<As> = {
  as?: As;
  css?: Css;
};

export type PropsWithAs<Props, As> = As extends React.ElementType
  ? LeftJoin<Props, React.ComponentPropsWithoutRef<As>> & StitchesProps<As>
  : never;

export type ComponentRef<As> = As extends React.ElementType
  ? React.ComponentRef<As>
  : never;

export type DefaultAs<T> = T extends PolymorphicComponent<
  unknown,
  infer DefaultAs
>
  ? DefaultAs
  : never;

export type PolymorphicRenderFunction<Props, DefaultAs> = (
  props: PropsWithAs<Props, DefaultAs>,
  ref: React.ForwardedRef<ComponentRef<DefaultAs>>
) => React.ReactElement | null;

export type PolymorphicComponent<Props, DefaultAs> = <As = DefaultAs>(
  props: PropsWithAs<Props, As> & React.RefAttributes<ComponentRef<As>>
) => React.ReactElement | null;

export type PolymorphicComponentProps<T> = T extends PolymorphicComponent<
  infer Props,
  infer DefaultAs
>
  ? PropsWithAs<Props, DefaultAs>
  : never;

export type PolymorphicComponentRef<T> = ComponentRef<DefaultAs<T>>;
