'use client';

import { GameField } from "@/app/lib/definitions";
import { createNote } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export default function Form({ games }: { games: GameField[] }) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(createNote, initialState);
  return (
    <form action={dispatch}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Contents:
        <input type="text" name="content" />
      </label>
      <label htmlFor="gameId">
        Game:
      </label>
      <div className="relative">
        <select
          title="gameId"
          name="gameId"  
          id="gameId"
          className="peer block" 
          defaultValue=""
          aria-describedby="game-error"
        >
          <option value="" disabled>
            Select a game
          </option>
          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.name}
            </option>
          ))}
        </select>
      </div>
      <div id="game-error">
        {state.errors?.gameId && <span>{state.errors.gameId}</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
