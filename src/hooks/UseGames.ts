// custom hook for fetching the games

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} []
}

// response object interface
interface GamesResponse {
  count: number;
  results: Game[];
}

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  console.log("Fetching games data...");

  const startTime = performance.now();

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        const endTime = performance.now();
        console.log("Games data fetched successfully");
        console.log(`Fetch duration: ${(endTime - startTime).toFixed(2)} ms`);
        setGames(response.data.results);
      })
      .catch((err) => {
        const endTime = performance.now();
        if (err instanceof CanceledError) {
          console.log("Request canceled:", err.message);
          return;
        }
        console.log(`Error duration: ${(endTime - startTime).toFixed(2)} ms`);
        setError(err.message);
      });

    // clean up function
    return () => {
      console.log("Aborting fetch request...");
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default UseGames;
