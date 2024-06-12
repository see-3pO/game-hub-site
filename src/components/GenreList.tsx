import React from "react";
import useGenre from "../hooks/UseGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();

  if (error) return <Text>{error.message}</Text>;

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
