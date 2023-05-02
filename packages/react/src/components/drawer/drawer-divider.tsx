import { styled } from "@vista-ui/core";
import { Divider } from "../divider";

export type DrawerDividerProps = React.ComponentProps<typeof DrawerDivider>;

export const DrawerDivider = styled(Divider, {
  mb: "$16",
});
