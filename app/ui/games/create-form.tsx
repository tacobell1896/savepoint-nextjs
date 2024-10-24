import { useActionState } from "react";
'use client'

import { Button, ButtonGroup } from "@nextui-org/button";
import { createGame } from "@/app/lib/actions";

export default function Form() {
  const initialState = {
    message: '',
    errors: {},
  };
  const [state, dispatch] = useActionState(createGame, initialState);
  return (
    <form action={dispatch}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <div id="game-name-error" aria-live="polite">
        {state.errors?.name &&
          state.errors.name.map((error) => (
            <p key={error} className="text-sm text-red-500">
              {error}
            </p>
          ))}
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
