"use client";

import { GameField, NoteForm } from "@/app/lib/definitions";
import { updateNote } from "../lib/actions";

export default function EditNoteForm({
  note,
  games,
}: {
  note: NoteForm;
  games: GameField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateNoteWithId = updateNote.bind(null, note.id);
}
