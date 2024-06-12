import useGenre from "../hooks/UseGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import cropImageURL from "../services/image-url";

const GenreList = () => {
  const { responseData, error, isLoading } = useGenre();

  if (error) return <Text>{error.message}</Text>;

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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
