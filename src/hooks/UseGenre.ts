// custom hook to fetch genres
import { fetchGenreKey } from "../utils/query-keys";
import { fetchData } from "../services/api";
import useData from "./UseData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () =>
  useData<Genre>({
    qKey: fetchGenreKey,
    qFunction: () => fetchData("/genres"),
  });

// const useGenre = () => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: fetchGenreKey,
//     queryFn: fetchGenres,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });

//   return { genres: data?.results || [], error, isLoading };
// };

export default useGenre;
