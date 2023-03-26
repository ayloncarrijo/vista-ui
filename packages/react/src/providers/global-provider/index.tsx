import { TooltipProvider } from "@radix-ui/react-tooltip";

export const GlobalProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => (
  <TooltipProvider delayDuration={250}>{children}</TooltipProvider>
);
