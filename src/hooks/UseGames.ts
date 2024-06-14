// custom hook for fetching the games

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const qKey =
    selectedGenre || selectedPlatform
      ? [
          ...fetchDataKey,
          selectedGenre ? String(selectedGenre.id) : null,
          selectedPlatform ? selectedPlatform.id : null,
        ].filter(Boolean) // Filters out any null values
      : fetchDataKey;
  return useData<Game>({
    qKey: qKey,
    qFunction: () =>
      fetchData<Game>("/games", {
        params: {
          genres: selectedGenre?.id?.toString(),
          platforms: selectedPlatform?.id,
        },
      }),
  });
};

export default useGames;

//selectedGenre ? [...fetchDataKey, String(selectedGenre.id)] : fetchDataKey
