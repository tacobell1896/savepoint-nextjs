export type Note = {
  id: number;
  title: string;
  content: string;
  game_id: number;
  create_date: string;
};

export type Game = {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
};
export type GameField = {
  id: number;
  name: string;
};

export type GameForm = {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
};

export type NoteForm = {
  id: number;
  title: string;
  content: string;
  game_id: number;
};
