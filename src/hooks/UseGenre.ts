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

export default useGenre;
