"use server";

import { sql } from "@vercel/postgres";
// TODO: add actions to get all games and notes for a user
// get all games
export async function getGames() {
  await sql`SELECT * FROM games`;
}
export async function getGame(id: string) {
  await sql`SELECT * FROM games WHERE id = ${id}`;
}
export async function createGame(name: string, description: string) {
  await sql`INSERT INTO games (name, description) VALUES (${name}, ${description})`;
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
