"use client";

import { useState } from "react";
import { HeartIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@onchainkit/ui/components/avatar";
import { Button } from "@onchainkit/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@onchainkit/ui/components/card";
import { Separator } from "@onchainkit/ui/components/separator";
import { cn } from "@onchainkit/ui/lib/utils";

export default function NFTMintCard() {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative group overflow-hidden">
          <img
            alt="NFT artwork"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            src="https://ui8-crypter-2.herokuapp.com/img/content/projects/image-9.jpg"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3"
            onClick={() => setLiked(!liked)}
          >
            <HeartIcon
              className={cn("w-5 h-5", {
                "fill-red-500 stroke-red-500": liked,
                "fill-none stroke-white": !liked,
              })}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary">
              Cosmic Dreamscape #137
            </h3>
            <p className="text-sm text-muted-foreground">
              Created by @stellar_artist
            </p>
          </div>
          <Avatar className="border-2 border-primary">
            <AvatarImage src="https://ui8-crypter-2.herokuapp.com/img/content/projects/image-9.jpg" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Bid</p>
              <p className="text-lg font-bold">2.5 ETH</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Ending In</p>
              <p className="text-lg font-bold">12h 55m</p>
            </div>
          </div>
          <Separator />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Mint</Button>
      </CardFooter>
    </Card>
  );
}
