// fetch function to handle the API request
import apiClient from "./api-client";
import { GamesResponse } from "../hooks/UseGames";

export const fetchGames = async () => {
  const response = await apiClient.get<GamesResponse>("/games");
  return response.data;
};
