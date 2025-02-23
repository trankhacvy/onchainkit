export interface WalletAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected: boolean;
  publicKey: string | null;
}

export interface ConnectWalletOptions {
  onSuccess?: (publicKey: string) => void;
  onError?: (error: Error) => void;
}

export async function connectWallet(
  wallet: WalletAdapter,
  options?: ConnectWalletOptions
) {
  try {
    await wallet.connect();
    
    if (wallet.publicKey && options?.onSuccess) {
      options.onSuccess(wallet.publicKey);
    }
  } catch (error) {
    if (options?.onError) {
      options.onError(error as Error);
    }
  }
}

export async function disconnectWallet(
  wallet: WalletAdapter,
  options?: ConnectWalletOptions
) {
  try {
    await wallet.disconnect();
  } catch (error) {
    if (options?.onError) {
      options.onError(error as Error);
    }
  }
}
