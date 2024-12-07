import Form from "./create-form";
import GameTable from "./game-table";

export default async function GameList() {
  return (
    <div className="flex gap-4">
      <GameTable />
      <Form />
    </div>
  );
}
