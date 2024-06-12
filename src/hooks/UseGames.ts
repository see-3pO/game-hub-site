// custom hook for fetching the games

import { fetchData } from "../services/api";
import { fetchDataKey } from "../utils/query-keys";
import useData from "./UseData";

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

const useGames = () =>
  useData<Game>({
    qKey: fetchDataKey,
    qFunction: () => fetchData<Game>("/games"),
  });

// const useGames = () => {
//   const { data, error, isLoading } = useQuery<GamesResponse, Error>({
//     queryKey: fetchDataKey,
//     queryFn: fetchGames,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });
//   return { games: data?.results || [], error, isLoading };
//   // return { data, error, isLoading };
// };

export default useGames;
