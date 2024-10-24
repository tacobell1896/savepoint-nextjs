'use client';
import React from "react";
import { Game } from "@/app/lib/definitions";

// Define the props type for GameCard
interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
/*    <Card className="py-4">
      <CardHeader>
        <Image src={game?.image_url} alt={game?.name} width={300} height={0} />
      </CardHeader>
      <CardBody>
        <h3 className="text-center font-bold">{game?.name}</h3>
        <p>{game?.description}</p>
      </CardBody>
    </Card>
    */
   <></>
  );
}

