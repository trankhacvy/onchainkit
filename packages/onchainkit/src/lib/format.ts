// Function to format a Solana public key for better readability
// It shortens the key by keeping the first 4 and last 4 characters, adding "..." in between

export function formatSolanaPublicKey(publicKey: string): string {
  if (publicKey.length !== 44) {
    throw new Error("Invalid Solana public key length");
  }
  return `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
}
