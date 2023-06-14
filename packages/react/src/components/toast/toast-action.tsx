import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";
import { Box } from "../box";
import { Button } from "../button";

export type ToastActionProps = React.ComponentProps<
  typeof ToastPrimitive.Action
>;

export const ToastAction = React.forwardRef<
  HTMLButtonElement,
  ToastActionProps
>(({ children, ...props }, ref) => (
  <Box css={{ ml: "auto" }}>
    <ToastPrimitive.Action asChild {...props}>
      <Button ref={ref} variant="text" inverse offset>
        {children}
      </Button>
    </ToastPrimitive.Action>
  </Box>
));

ToastAction.displayName = "ToastAction";
