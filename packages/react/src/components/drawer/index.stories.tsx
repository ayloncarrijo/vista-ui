import type { Meta, StoryFn } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeadline,
  DrawerItem,
  DrawerTrigger,
} from ".";
import { Button } from "../button";
import { Divider } from "../divider";
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

      <DrawerHeadline>Headline</DrawerHeadline>
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

      <Divider />

      <DrawerHeadline>Headline</DrawerHeadline>
      <DrawerItem href="/" icon="favorite">
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

      <Divider />

      <DrawerHeadline>Headline</DrawerHeadline>
      <DrawerItem href="/" icon="favorite">
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
