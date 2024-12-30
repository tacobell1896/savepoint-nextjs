import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGames, getNotes } from "@/app/lib/data";
import { Note, NoteField } from "@/app/lib/definitions";
import Form from "./create-form";

export default async function NoteList() {
  const notes = await getNotes();
  return (
    <div className="flex gap-4">
      <Table>
        <TableCaption>Notes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Game</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.map((note: NoteField) => (
            <TableRow key={note.id}>
              <TableCell>{note.name}</TableCell>
              <TableCell>{note.title}</TableCell>
              <TableCell>{note.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
