import React from "react";
import { stateLayerHook } from "../../css";
import { styled } from "../../utils/styled";
import { Icon } from "../icon";
import { Slottable } from "../slot";
import { StateLayer } from "../state-layer";

export type DrawerItemProps = React.ComponentProps<typeof StyledRoot> & {
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

export const DrawerItem = React.forwardRef<HTMLAnchorElement, DrawerItemProps>(
  ({ children, icon, ...props }, ref) => {
    return (
      <StyledRoot ref={ref} {...props}>
        <Slottable inherit={children}>
          {(child) => (
            <>
              {Boolean(icon) && <Icon>{icon}</Icon>}
              <StyledContent>{child}</StyledContent>
              <StateLayer />
            </>
          )}
        </Slottable>
      </StyledRoot>
    );
  }
);

DrawerItem.displayName = "DrawerItem";
