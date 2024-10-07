'use server'

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const GameSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please add a name",
  }),
  description: z.string(),
  image: z.string(),
  date: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  message?: string | null;
};

const CreateGame = GameSchema.omit({ id: true, date: true });
const UpdateGame = GameSchema.omit({ id: true });

export async function createGame(prevState: State, formData: FormData) {
  const validatedFields = CreateGame.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors above.",
    };
  }
  const { name, description, image } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];
  try {
    await sql`INSERT INTO games (name, description, image, date) VALUES (${name}, ${description}, ${image}, ${date})`;
  } catch (error) {
    return {
      message: "An error occurred while creating the game",
    };
  }
  revalidatePath("/games");
  redirect("/games");
}

// TODO: add actions to update and delete games
export async function updateGame() {}
export async function deleteGame() {}

const NoteSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: "Please add a title",
  }),
  content: z.string({
    invalid_type_error: "Please add content",
  }),
  gameId: z.string({
    invalid_type_error: "Please select a game",
  }),
  date: z.string(),
});

export type NoteState = {
  errors?: {
    title?: string[];
    content?: string[];
    gameId?: string[];
  };
  message?: string | "";
};

const CreateNote = NoteSchema.omit({ id: true, date: true });
const UpdateNote = NoteSchema.omit({ id: true });
export async function createNote(prevState: NoteState, formData: FormData) {
  const validatedFields = CreateNote.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    gameId: formData.get("gameId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors above.",
    };
  }

  const { title, content, gameId } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`INSERT INTO notes (title, content, game_id, date) VALUES (${title}, ${content}, ${gameId}, ${date})`;
  } catch (error) {
    return {
      message: "A database error occurred while creating the note",
    };
  }
  revalidatePath("/notes");
  redirect("/notes");
}

// TODO: add actions to update and delete notes
export async function updateNote() {}
export async function deleteNote() {}
