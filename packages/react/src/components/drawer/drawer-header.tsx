import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "@vista-ui/core";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Box } from "../box";
import { IconButton } from "../icon-button";

export type DrawerHeaderProps = PolymorphicComponentProps<typeof DrawerHeader>;

const StyledRoot = styled("header", {
  mb: "$$contentPadding",
  display: "flex",
  alignItems: "center",
  gap: "$16",
});

export const DrawerHeader = forwardRef<unknown, "header">(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      {children}
      <Box css={{ ml: "auto", mr: "-$8", my: "-$8" }}>
        <DialogPrimitive.Close asChild>
          <IconButton label="Fechar">close</IconButton>
        </DialogPrimitive.Close>
      </Box>
    </StyledRoot>
  )
);
