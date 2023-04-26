import { ToastProvider, ToastViewport } from "../../components/toast";
import { TooltipProvider } from "../../components/tooltip";

export const GlobalProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => (
  <TooltipProvider delayDuration={250}>
    <ToastProvider swipeDirection="left">
      {children}
      <ToastViewport />
    </ToastProvider>
  </TooltipProvider>
);
