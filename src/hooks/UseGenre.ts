// custom hook to fetch genres
import { useQuery } from "@tanstack/react-query";
import { fetchGenreKey } from "../utils/query-keys";
import { fetchGenres } from "../services/api";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: fetchGenreKey,
    queryFn: fetchGenres,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { genres: data?.results || [], error, isLoading };
};

export default useGenre;
