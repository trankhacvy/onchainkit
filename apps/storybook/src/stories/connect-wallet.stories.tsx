import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ConnectWallet, ConnectWalletProps } from "@onchainkit/ui/components/connect-wallet";

const mockWallet = {
  connect: async () => {
    console.log("Connecting...");
  },
  disconnect: async () => {
    console.log("Disconnecting...");
  },
  isConnected: false,
  publicKey: null,
};

const meta = {
  title: "Example/Connect-Wallet",
  component: ConnectWallet as any,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { 
    onClick: fn(),
    wallet: mockWallet,
    onSuccess: (publicKey: string) => console.log("Connected:", publicKey),
    onError: (error: Error) => console.error("Error:", error)
  },
} satisfies Meta<ConnectWalletProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Connect Wallet",
  },
};
