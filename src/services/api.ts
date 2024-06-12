// fetch function to handle the API request
import apiClient from "./api-client";
import { FetchResponse } from "../hooks/UseData";

// export const fetchGames = async () => {
//   const response = await apiClient.get<GamesResponse>("/games");
//   return response.data;
// };

// // function to fetch genres
// export const fetchGenres = async () => {
//   const genreResponse = await apiClient.get<GenreResponse>("/genres");
//   return genreResponse.data;
// }

// generic query function to fetch data from endpoint
export const fetchData = async <T>(
  endpoint: string
): Promise<FetchResponse<T>> => {
  const response = await apiClient.get<FetchResponse<T>>(endpoint);
  return response.data;
};
