import useGenre from "../hooks/UseGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { responseData, error, isLoading } = useGenre();

  if (error) return <Text>{error.message}</Text>;

  return (
    <ul>
      {responseData?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
