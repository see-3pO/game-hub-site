import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import useGames from "../hooks/UseGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();  // Using the custom hook to get games data

  if (isLoading) return <Text>Loading...</Text>;  // Displaying loading state

  // Type assertion to assume error is an object with a message property
  if (error) return <Text>{(error as Error).message}</Text>;          // Displaying error message

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={8}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />  // Rendering a GameCard for each game
      ))}
    </SimpleGrid>
  );
};


export default GameGrid;

// const GameGrid = () => {
//   const {games, error} = UseGames();
//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={8}>
//         {games.map((game) => (
//           <GameCard key={game.id} game={game} />
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };