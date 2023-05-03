import * as ToastPrimitive from "@radix-ui/react-toast";
import { forwardRef } from "../../utils/forward-ref";
import { Box } from "../box";
import { Button } from "../button";

export type ToastActionProps = React.ComponentProps<typeof ToastAction>;

export type ToastActionRootProps = React.ComponentProps<
  typeof ToastPrimitive.Action
>;

export const ToastAction = forwardRef<ToastActionRootProps, "button">(
  ({ children, ...props }, ref) => (
    <Box css={{ ml: "auto" }}>
      <ToastPrimitive.Action asChild {...props}>
        <Button ref={ref} variant="text" inverse offset>
          {children}
        </Button>
      </ToastPrimitive.Action>
    </Box>
  )
);
