import Image from "next/image";
import Link from "next/link";
import GameList from "@/app/ui/games/game-list"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to SavePoint, a journaling app for games!</h2>
	      <GameList />
    </div>
  );
}
