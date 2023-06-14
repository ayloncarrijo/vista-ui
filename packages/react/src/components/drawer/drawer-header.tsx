import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import { styled } from "../../utils/styled";
import { Box } from "../box";
import { IconButton } from "../icon-button";
import { Slottable } from "../slot";

export type DrawerHeaderProps = React.ComponentProps<typeof StyledRoot>;

const StyledRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$16",
});

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledRoot ref={ref} {...props}>
        <Slottable inherit={children}>
          {(child) => (
            <>
              {child}
              <Box css={{ ml: "auto" }}>
                <DialogPrimitive.Close asChild>
                  <IconButton label="Fechar menu" offset tooltip={false}>
                    close
                  </IconButton>
                </DialogPrimitive.Close>
              </Box>
            </>
          )}
        </Slottable>
      </StyledRoot>
    );
  }
);

DrawerHeader.displayName = "DrawerHeader";
