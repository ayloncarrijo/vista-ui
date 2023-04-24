import { styled } from "@you-ui/core";
import { stateLayerHook } from "../../css";
import type { PolymorphicComponentProps } from "../../types/forward-ref";
import { forwardRef } from "../../utils/forward-ref";
import { Icon } from "../icon";
import { StateLayer } from "../state-layer";

export type DrawerItemProps = PolymorphicComponentProps<typeof DrawerItem>;

export type DrawerItemRootProps = {
  icon?: string;
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
  typography: "$labelLg",
  color: "$onSurfaceVariant",
  borderRadius: "$full",
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
