import { sql } from "@vercel/postgres";
import { GameField, NoteField } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getGames() {
  try {
    const data = await sql<GameField>`SELECT * FROM games`;

    const games = data.rows;
    return games;
  } catch (err) {
    console.error(err);
    throw new Error("An error occurred while fetching games");
  }
}
export async function getGame(id: string) {
  try {
    const data = await sql<GameField>`SELECT * FROM games WHERE id = ${id}`;
    const game = data.rows[0];
    return game;
  } catch (err) {
    console.error(err);
    throw new Error("An error occurred while fetching the game");
  }
}

export async function getNotes() {
  try {
    const data =
      await sql<NoteField>`SELECT g.name, n.id, n.title, n.content, n.create_date FROM notes n left join games g on n.game_id = g.id`;
    const notes = data.rows;
    return notes;
  } catch (err) {
    console.error(err);
    throw new Error("An error occurred while fetching notes");
  }
}
export async function getNotesByGame(game_id: string) {
  try {
    const data = await sql`SELECT * FROM notes where game_id = ${game_id}`;
  } catch (err) {
    console.error(err);
    throw new Error("An error occurred while fetching notes for your game");
  }
}
export async function getNote(id: string) {
  await sql`SELECT * FROM notes WHERE id = ${id}`;
}
