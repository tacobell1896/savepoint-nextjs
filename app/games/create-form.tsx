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
    <div>
      <h1>Form</h1>
      <form action={dispatch}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
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
    </div>
  );
}
