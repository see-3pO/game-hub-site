// fetch function to handle the API request
import apiClient from "./api-client";
import { GamesResponse } from "../hooks/UseGames";
import { GenreResponse } from "../hooks/UseGenre";

export const fetchGames = async () => {
  const response = await apiClient.get<GamesResponse>("/games");
  return response.data;
};


// function to fetch genres
export const fetchGenres = async () => {
  const genreResponse = await apiClient.get<GenreResponse>("/genres");
  return genreResponse.data;
}
