import { styled } from "@vista-ui/core";

export type DrawerHeadlineProps = React.ComponentProps<typeof DrawerHeadline>;

export const DrawerHeadline = styled("div", {
  my: "$16",
  color: "$onSurfaceVariant",
  typography: "$titleSm",
});
