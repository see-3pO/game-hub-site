// import extendTheme function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extend the theme
const theme = extendTheme({ config });

export default theme;
