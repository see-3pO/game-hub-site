import useGenre, { Genre } from "../hooks/UseGenre";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import cropImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }:Props) => {
  const { responseData, error, isLoading } = useGenre();

  if (error) return <Text>{error.message}</Text>;
  if(isLoading) return <Spinner />;

  return (
    <List>
      {responseData?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={cropImageURL(genre.image_background)}
            />
            <Button fontSize="lg" variant="link" onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
