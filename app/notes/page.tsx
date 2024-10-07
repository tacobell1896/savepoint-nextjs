import NoteCard from "@/app/ui/notes/note";
import Form from "@/app/ui/notes/create-form";
import { getGames } from "@/app/lib/data";

export default async function Page() {
 const games = await getGames();
  return (
    <div>
      <h1>Notes</h1>
      <NoteCard note={note}/>
      <Form games={games} />
    </div>
  );
}

const note = {
  id: 1,
  title: "Note 1",
  content: "This is the content of note 1",
  game_id: 1,
  create_date: "2024-08-30",
};