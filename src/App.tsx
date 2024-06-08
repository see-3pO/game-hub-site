import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        // responsive breakpoints
        base: `"nav" "main"`, // Opx
        lg: `"nav nav" "aside main"`, // ~992px
      }}
    >
      <GridItem area={"nav"} bg="orange.300">
        Nav
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
