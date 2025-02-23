import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import NFTCard from "@onchainkit/react/components/nft/nft-card";
import NFTMintCard from "@onchainkit/react/components/nft/nft-mint-card";

const meta = {
  title: "Example/NFT",
  component: NFTMintCard,
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
} satisfies Meta<typeof NFTMintCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
