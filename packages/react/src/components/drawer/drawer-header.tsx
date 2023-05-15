import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "@vista-ui/core";
import { forwardRef } from "../../utils/forward-ref";
import { Box } from "../box";
import { IconButton } from "../icon-button";

export type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeader>;

const StyledRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$16",
});

export const DrawerHeader = forwardRef<unknown, "div">(
  ({ children, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      {children}
      <Box css={{ ml: "auto" }}>
        <DialogPrimitive.Close asChild>
          <IconButton label="Fechar menu" offset tooltip={false}>
            close
          </IconButton>
        </DialogPrimitive.Close>
      </Box>
    </StyledRoot>
  )
);
