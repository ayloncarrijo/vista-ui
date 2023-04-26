import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Toast } from ".";
import { Button } from "../button";
import { ToastAction } from "./toast-action";

const meta: Meta = {
  title: "Components/Toast",
};

export default meta;

export const Default: StoryFn = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Fire toast
      </Button>

      <Toast
        message="A snackbar message."
        open={isOpen}
        onOpenChange={setIsOpen}
      />

      <Toast
        message="A snackbar message."
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <ToastAction altText="Go to schedule to undo">Undo</ToastAction>
      </Toast>

      <Toast
        message="Lorem ipsum, dolor sit amet consectetur elit. Reprehenderit dignissimos facilis."
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <ToastAction altText="Go to schedule to undo">Undo</ToastAction>
      </Toast>
    </>
  );
};
