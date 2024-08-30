import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Note } from "../lib/definitions";

export default function NoteCard({ note: Note }) {
  return (
    <Card>
      <CardHeader>
        <h4>{note.title}</h4>
      </CardHeader>
      <CardBody>
        <span>{note.create_date}</span>
        <p>{note.content}</p>
      </CardBody>
    </Card>
  );
}

const note = {
  id: 1,
  title: "Note 1",
  content: "This is the content of note 1",
  game_id: 1,
  create_date: "2024-08-30",
};
