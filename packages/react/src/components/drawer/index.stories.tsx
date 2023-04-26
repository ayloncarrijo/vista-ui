import type { Meta, StoryFn } from "@storybook/react";
import { Drawer, DrawerContent, DrawerItem, DrawerTrigger } from ".";
import { Button } from "../button";
import { Text } from "../text";
import { DrawerHeader } from "./drawer-header";

const meta: Meta = {
  title: "Components/Drawer",
};

export default meta;

export const Default: StoryFn = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button>Open drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <Text typography="headlineSm">Title</Text>
      </DrawerHeader>
      <DrawerItem href="/" icon="favorite" active>
        Item
      </DrawerItem>
      <DrawerItem href="/" icon="favorite">
        Item
      </DrawerItem>
      <DrawerItem href="/" icon="favorite">
        Item
      </DrawerItem>
      <DrawerItem href="/" icon="favorite">
        Item
      </DrawerItem>
    </DrawerContent>
  </Drawer>
);
