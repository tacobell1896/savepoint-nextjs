"use client";

import { GameField } from "@/app/lib/definitions";
import { createNote } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "@nextui-org/react";

export default function Form({ games }: { games: GameField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createNote, initialState);
  return (
    <form action={dispatch}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Contents:
        <input type="text" name="contents" />
      </label>
      <label>
        Game:
        <select
          id="note"
          name="gameId"
          defaultValue=""
          aria-describedby="note-error"
        >
          <option value="" disabled>
            Select a game
          </option>
          {games?.map((game) => (
            <option key={game.id} value={game.id}>
              {game.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <input type="submit" value="Submit" />
      <Button type="submit">Create Note</Button>
    </form>
  );
}
