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
import { getNotes } from "@/app/lib/data";
import { Note } from "@/app/lib/definitions";

export default function NoteList() {
  return (
    <Table>
      <TableCaption>Notes</TableCaption>
      <TableHead>Game</TableHead>
      <TableHead>Date</TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
