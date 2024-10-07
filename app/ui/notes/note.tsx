import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Note } from "@/app/lib/definitions";

interface NoteCardProps {
  note: Note
}

export default function NoteCard( {note}: NoteCardProps ) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{note.content}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <span>{note.create_date}</span>
      </CardFooter>
    </Card>
  );
}

