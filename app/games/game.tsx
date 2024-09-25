import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Game } from "../lib/definitions";
import games from "../lib/games.json";
import Form from "./create-form";

export function GameCard({ game: game }) {
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

export default function GameList() {
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
