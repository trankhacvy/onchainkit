import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@onchainkit/ui/components/avatar";

export function Identity() {
  return (
    <div className="relative flex items-center gap-3 p-4 bg-muted">
      <Avatar className="h-12 w-12 border-2 border-gray-700">
        <AvatarImage
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2019.38.49-skKDzKaSSGXHAP7rSRALGyWSYrD7Xr.png"
          alt="Profile picture"
        />
        <AvatarFallback>NP</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">nickprince.eth</h2>
        <p className="text-sm text-muted-foreground">0x838a...B4D9</p>
      </div>
    </div>
  );
}
