import NoteCard from "@/app/ui/notes/note";
import Form from "@/app/ui/notes/create-form";
import { getGames } from "@/app/lib/data";
import NoteList from "@/app/ui/notes/note-list";

export default async function Page() {
 const games = await getGames();
  return (
      <Form games={games} />
  );
}
