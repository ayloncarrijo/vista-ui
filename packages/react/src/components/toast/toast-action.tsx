import * as ToastPrimitive from "@radix-ui/react-toast";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Box } from "../box";
import { Button } from "../button";

export type ToastActionProps = PolymorphicComponentProps<typeof ToastAction>;

export type ToastActionRootProps = React.ComponentProps<
  typeof ToastPrimitive.Action
>;

export const ToastAction = forwardRef<ToastActionRootProps, "button">(
  ({ children, ...props }, ref) => (
    <Box css={{ ml: "auto", mr: "-$8", my: "-$8" }}>
      <ToastPrimitive.Action asChild {...props}>
        <Button ref={ref} variant="text" inverse>
          {children}
        </Button>
      </ToastPrimitive.Action>
    </Box>
  )
);
