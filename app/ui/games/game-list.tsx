
import Form from "./create-form";
import { getGames } from "@/app/lib/data";
import { Game } from "@/app/lib/definitions";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default async function GameList() {
  // get games
  const games = await getGames();
  return (
    <div className="flex gap-4">
        <Table>
            <TableCaption>A list of all your games you are playing</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Game Name</TableHead>
                    <TableHead>Game Description</TableHead>
                    <TableHead>Cover</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {games.map((game: Game) => (
                <TableRow key={game.id}>
                    <TableCell>{game.name}</TableCell>
                    <TableCell>{game.description}</TableCell>
                    <TableCell>{game.image_url}</TableCell>
                </TableRow>
                ))}
            </TableBody> 
        </Table>
      <Form />
    </div>
  );
}