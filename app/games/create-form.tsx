"use client";

import { createGame } from "@/app/lib/actions";
import { Game } from "../lib/definitions";
import { useFormState } from "react-dom";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Form({ games }: { games: Game[] }) {
  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(createGame, initialState);
  return (
      <form action={dispatch}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <div id="game-name-error" aria-live="polite">
          {state.errors?.name && state.errors.name.map((error) => <p key={error} className="text-sm text-red-500">{error}</p>))}
        </div>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <label>
          Image:
          <input type="text" name="image" />
        </label>
        <Button type="submit">Submit</Button>
      </form>
  );
}
