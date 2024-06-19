// custom hook for fetching the games

import { GameQuery } from "../App";
import { fetchData } from "../services/api";
import { fetchDataKey } from "../utils/query-keys";
import useData from "./UseData";
import { Genre } from "./UseGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// response object interface
export interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const qKey =
    gameQuery.genre || gameQuery.platform || gameQuery.sortOrder
      ? [
          ...fetchDataKey,
          gameQuery.genre ? String(gameQuery.genre.id) : null,
          gameQuery.platform ? gameQuery.platform.id : null,
          gameQuery.sortOrder ? gameQuery.sortOrder: null,
        ].filter(Boolean) // Filters out any null values
      : fetchDataKey;
  return useData<Game>({
    qKey: qKey,
    qFunction: () =>
      fetchData<Game>("/games", {
        params: {
          genres: gameQuery.genre?.id?.toString(),
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
        },
      }),
  });
};

export default useGames;

//selectedGenre ? [...fetchDataKey, String(selectedGenre.id)] : fetchDataKey
