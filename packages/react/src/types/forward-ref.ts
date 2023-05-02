import type { LeftJoin } from "@ayloncarrijo/utilities";
import type { Css } from "@vista-ui/core";

// TODO: Review performance of generic constraints
// https://github.com/microsoft/TypeScript/issues/53035

export type ComponentRef<T> = T extends React.ElementType
  ? React.ComponentRef<T>
  : never;

export type PolymorphicPropsWithRef<Props, As> = PolymorphicProps<Props, As> &
  React.RefAttributes<ComponentRef<As>>;

export type PolymorphicProps<Props, As> = As extends React.ElementType
  ? { as?: As; css?: Css } & LeftJoin<Props, React.ComponentPropsWithoutRef<As>>
  : never;

export type PolymorphicRenderFn<Props, DefaultAs> = (
  props: PolymorphicProps<Props, DefaultAs>,
  ref: React.ForwardedRef<ComponentRef<DefaultAs>>
) => React.ReactElement | null;

export type PolymorphicComponent<Props, DefaultAs> = {
  <As = DefaultAs>(
    props: PolymorphicPropsWithRef<Props, As>
  ): React.ReactElement | null;
  (props: PolymorphicPropsWithRef<Props, DefaultAs>): React.ReactElement | null;
};
