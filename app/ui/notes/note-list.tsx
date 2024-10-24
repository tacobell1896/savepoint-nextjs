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
   ) 
}