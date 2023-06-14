import React from "react";
import { styled } from "../../utils/styled";
import { Slottable } from "../slot";

export type DividerProps = React.ComponentProps<typeof StyledRoot>;

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

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      <Slottable inherit={children}>
        {(child) => (
          <>
            <StyledLine />
            {Boolean(child) && <StyledContent>{child}</StyledContent>}
            <StyledLine />
          </>
        )}
      </Slottable>
    </StyledRoot>
  )
);

Divider.displayName = "Divider";
