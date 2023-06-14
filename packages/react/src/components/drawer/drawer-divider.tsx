import { styled } from "../../utils/styled";
import { Divider } from "../divider";

export type DrawerDividerProps = React.ComponentProps<typeof DrawerDivider>;

export const DrawerDivider = styled(Divider, {
  mb: "$16",
});
