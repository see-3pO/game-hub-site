import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/UseGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { responseData, error, isLoading } = useGames(); // Using the custom hook to get games data
  const skeletons = [1, 2, 3, 4, 5, 6];

  // if (isLoading) return <Text>Loading...</Text>;  // Displaying loading state

  // Type assertion to assume error is an object with a message property
  if (error) return <Text>{(error as Error).message}</Text>; // Displaying error message

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={10}
      spacing={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {responseData?.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
