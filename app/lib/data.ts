import { sql } from "@vercel/postgres";
import { GameField } from "./definitions";
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
  await sql`SELECT * FROM notes`;
}
export async function getNote(id: string) {
  await sql`SELECT * FROM notes WHERE id = ${id}`;
}
