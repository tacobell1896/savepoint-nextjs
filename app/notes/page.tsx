import NoteCard from "@/app/ui/notes/note";
import Form from "@/app/ui/notes/create-form";
import { getGames } from "@/app/lib/data";
import games from "@/app/lib/games.json";

export default async function Page() {
  // const games = await getGames();
  return (
    <div>
      <h1>Notes</h1>
      <Form games={games} />
    </div>
  );
}
