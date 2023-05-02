import { styled } from "@vista-ui/core";
import type React from "react";
import { stateLayerHook } from "../../css";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type DrawerItemProps = React.ComponentProps<typeof DrawerItem>;

export type DrawerItemRootProps = {
  icon?: React.ReactNode;
  active?: boolean;
};

const StyledRoot = styled("a", stateLayerHook, {
  mx: "-$16",
  px: "$16",
  height: "$56",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "$12",
  borderRadius: "$full",
  color: "$onSurfaceVariant",
  typography: "$labelLg",
  lineHeight: "normal",
  variants: {
    active: {
      true: {
        backgroundColor: "$secondaryContainer",
        color: "$onSecondaryContainer",
      },
    },
  },
});

const StyledContent = styled("span", {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const DrawerItem = forwardRef<DrawerItemRootProps, "a">(
  ({ children, icon, ...props }, ref) => (
    <StyledRoot ref={ref} {...props}>
      {Boolean(icon) && <Icon>{icon}</Icon>}
      <StyledContent>{children}</StyledContent>
      <StateLayer />
    </StyledRoot>
  )
);
