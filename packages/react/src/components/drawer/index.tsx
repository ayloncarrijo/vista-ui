import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DrawerProps = React.ComponentProps<typeof Drawer>;

export const Drawer = DialogPrimitive.Root;

export * from "./drawer-body";
export * from "./drawer-content";
export * from "./drawer-divider";
export * from "./drawer-footer";
export * from "./drawer-header";
export * from "./drawer-headline";
export * from "./drawer-item";
export * from "./drawer-trigger";
