import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Game } from "@/app/lib/definitions";
import Form from "./create-form";
import { getGames } from "@/app/lib/data";

// Define the props type for GameCard
interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="py-4">
      <CardHeader>
        <Image src={game.image_url} alt={game.name} width={300} height={0} />
      </CardHeader>
      <CardBody>
        <h3 className="text-center font-bold">{game.name}</h3>
        <p>{game.description}</p>
      </CardBody>
    </Card>
  );
}

export default async function GameList() {
  // get games
  const games = await getGames();
  return (
    <div className="flex gap-4">
      {games.map((game: Game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
      <Form />
    </div>
  );
}
