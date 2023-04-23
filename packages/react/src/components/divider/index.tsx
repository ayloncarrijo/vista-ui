import { styled } from "@you-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";

export type DividerProps = PolymorphicComponentProps<typeof Divider>;

const StyledRoot = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const StyledLine = styled("span", {
  flex: 1,
  height: 1,
  backgroundColor: "$outlineVariant",
});

const StyledContent = styled("span", {
  px: "$16",
  typography: "$bodySm",
});

export const Divider = forwardRef<unknown, "div">(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      <StyledLine />
      {Boolean(children) && <StyledContent>{children}</StyledContent>}
      <StyledLine />
    </StyledRoot>
  )
);