import type { Meta, StoryObj } from "@storybook/react";
import { WalletProvider } from "@onchainkit/ui/providers/wallet-provider";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import ConnectWallet from "@onchainkit/ui/components/connect-wallet";
import React from 'react';
import "@solana/wallet-adapter-react-ui/styles.css";

const wallets = [new PhantomWalletAdapter()];
const endpoint = clusterApiUrl("devnet");

const WalletContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletProvider 
      wallets={wallets}
      endpoint={endpoint}
    >
      {children as JSX.Element}
    </WalletProvider>
  );
};

const meta = {
  title: "Example/Connect-Wallet",
  component: ConnectWallet,
  decorators: [(Story) => <WalletContextProvider><Story /></WalletContextProvider>],
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ConnectWallet>;

type Story = StoryObj<{
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  onSuccess?: (publicKey: string) => void;
  onError?: (error: Error) => void;
}>;

export default meta;

export const Primary: Story = {
  render: function Render(args) {
    return <ConnectWallet {...args} />;
  },
  args: {
    variant: "outline",
    size: "lg",
    onSuccess: (publicKey: string) => console.log("Connected:", publicKey),
    onError: (error: Error) => console.error("Error:", error)
  }
};