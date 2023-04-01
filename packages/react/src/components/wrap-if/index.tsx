import { isTruthy, type Falsy } from "@ayloncarrijo/utilities";

export type WrapIfProps = {
  children: React.ReactNode;
  wrappers: Array<((children: React.ReactNode) => React.ReactNode) | Falsy>;
};

export const WrapIf = ({ children, wrappers }: WrapIfProps): JSX.Element => (
  <>
    {wrappers
      .filter(isTruthy)
      .reduce((accumulator, wrapper) => wrapper(accumulator), children)}
  </>
);
