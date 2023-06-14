import { styled } from "../../utils/styled";

export type DrawerHeadlineProps = React.ComponentProps<typeof DrawerHeadline>;

export const DrawerHeadline = styled("h3", {
  mb: "$16",
  color: "$onSurfaceVariant",
  typography: "$titleSm",
});
