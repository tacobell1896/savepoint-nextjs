"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// TODO: add actions to get all games and notes for a user
// get all games
export async function getGames() {
  await sql`SELECT * FROM games`;
}
export async function getGame(id: string) {
  await sql`SELECT * FROM games WHERE id = ${id}`;
}
const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please add a name",
  }),
  description: z.string(),
  image: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

const CreateGame = FormSchema.omit({ id: true });
const UpdateGame = FormSchema.omit({ id: true });

export async function createGame(prevState: State, formData: FormData) {
  const validatedFields = CreateGame.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.errors,
    };
  }
  const { name, description, image } = validatedFields.data;
  try {
    await sql`INSERT INTO games (name, description, image) VALUES (${name}, ${description}, ${image})`;
  } catch (error) {
    return {
      message: "An error occurred while creating the game",
    };
  }
}

// TODO: add actions to update and delete games
export async function updateGame() {}
export async function deleteGame() {}

export async function getNotes() {
  await sql`SELECT * FROM notes`;
}
export async function getNote(id: string) {
  await sql`SELECT * FROM notes WHERE id = ${id}`;
}
export async function createNote(title: string, content: string) {
  await sql`INSERT INTO notes (title, content) VALUES (${title}, ${content})`;
}

// TODO: add actions to update and delete notes
export async function updateNote() {}
export async function deleteNote() {}
