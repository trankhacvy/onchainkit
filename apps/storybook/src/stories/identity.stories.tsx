import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Identity } from "@onchainkit/react/components/identity";

const meta = {
  title: "Example/Identity",
  component: Identity,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
  // decorators: [
  //   (Story) => (
  //     <div>
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof Identity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
