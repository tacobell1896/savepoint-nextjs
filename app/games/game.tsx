import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Game } from "../lib/definitions";

export default function GameCard({ game: Game }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-center">{game.name}</h3>
      </CardHeader>
      <CardBody>
        <Image src={game.image_url} alt={game.name} width={300} height={0} />
        <p>{game.description}</p>
      </CardBody>
    </Card>
  );
}

const game = {
  id: 1,
  name: "Cyberpunk 2077",
  description:
    "Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",
  image_url:
    "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
};
