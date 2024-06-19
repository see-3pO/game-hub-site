import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.jpg';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize='80px' borderRadius="10px" my="5px" ml="5px" />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
};

export default NavBar;

