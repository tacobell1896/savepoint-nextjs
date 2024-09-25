export type Game = {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
};
export type Note = {
  id: number;
  title: string;
  content: string;
  game_id: number;
  create_date: string;
};
