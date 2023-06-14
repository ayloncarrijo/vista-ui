import type * as StitchesUtil from "@stitches/react/types/stitches";
import type * as StyledComponentUtil from "@stitches/react/types/styled-component.js";
import type * as Util from "@stitches/react/types/util";
import type * as Core from "@vista-ui/core";

export type StyledComponentProps = {
  asChild?: boolean;
  css?: Core.Css;
};

export type StyledComponent<
  Type extends React.ElementType,
  Props extends Record<string, unknown>
> = React.NamedExoticComponent<
  Util.Assign<
    React.ComponentPropsWithRef<Type>,
    StyledComponentUtil.TransformProps<Props, Core.Media> & StyledComponentProps
  >
> & {
  className: string;
  selector: string;
};

export type StyledFunction = <
  Type extends React.ElementType,
  Composers extends Array<React.ElementType | Record<string, unknown>>,
  Css = Core.Css
>(
  type: Type,
  ...composers: {
    [K in keyof Composers]: string extends Composers[K] // Strings, React Components, and Functions can be skipped over
      ? Composers[K]
      : Composers[K] extends string | React.ComponentType | Util.Function
      ? Composers[K]
      : StitchesUtil.RemoveIndex<Css> & {
          /** The **variants** property lets you set a subclass of styles based on a key-value pair.
           *
           * [Read Documentation](https://stitches.dev/docs/variants)
           */
          variants?: {
            [Name in string]: {
              [Pair in number | string]: Css;
            };
          };
          /** The **compoundVariants** property lets you to set a subclass of styles based on a combination of active variants.
           *
           * [Read Documentation](https://stitches.dev/docs/variants#compound-variants)
           */
          compoundVariants?: Array<
            ("variants" extends keyof Composers[K]
              ? {
                  [Name in keyof Composers[K]["variants"]]?:
                    | Util.Widen<keyof Composers[K]["variants"][Name]>
                    | Util.String;
                }
              : Util.WideObject) & {
              css: Css;
            }
          >;
          /** The **defaultVariants** property allows you to predefine the active key-value pairs of variants.
           *
           * [Read Documentation](https://stitches.dev/docs/variants#default-variants)
           */
          defaultVariants?: "variants" extends keyof Composers[K]
            ? {
                [Name in keyof Composers[K]["variants"]]?:
                  | Util.Widen<keyof Composers[K]["variants"][Name]>
                  | Util.String;
              }
            : Util.WideObject;
        } & Css & {
            [K2 in keyof Composers[K]]: K2 extends
              | "compoundVariants"
              | "defaultVariants"
              | "variants"
              ? unknown
              : K2 extends keyof Css
              ? Css[K2]
              : unknown;
          };
  }
) => StyledComponent<Type, StyledComponentUtil.StyledComponentProps<Composers>>;
