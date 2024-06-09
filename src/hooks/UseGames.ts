// custom hook for fetching the games

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
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

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // clean up function
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default UseGames;
