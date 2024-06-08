import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        // responsive breakpoints
        base: `"nav" "main"`, // Opx
        lg: `"nav nav" "aside main"`, // ~992px
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="blue.300">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
