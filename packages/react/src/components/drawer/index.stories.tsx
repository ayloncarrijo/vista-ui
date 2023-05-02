import type { Meta, StoryFn } from "@storybook/react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDivider,
  DrawerHeader,
  DrawerHeadline,
  DrawerItem,
  DrawerTrigger,
} from ".";
import { Button } from "../button";
import { Text } from "../text";

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

      <DrawerBody>
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

        <DrawerDivider />

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
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
