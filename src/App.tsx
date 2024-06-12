import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        // responsive breakpoints
        base: `"nav" "main"`, // Opx
        lg: `"nav nav" "aside main"`, // ~992px
      }}

      templateColumns={{
        // 1fr(1 fraction) column takes up all space
        base: '1fr',
        lg: '200px 1fr'

      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5} >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
