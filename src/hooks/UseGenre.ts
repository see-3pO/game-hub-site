// custom hook to fetch genres
import { fetchGenreKey } from "../utils/query-keys";
import { fetchData } from "../services/api";
import useData from "./UseData";
import genres from "../data/genres";

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

const useGenre = () => ({ responseData: genres, isLoading: false, error: null })

export default useGenre;
