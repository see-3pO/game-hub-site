import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.jpg';
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize='80px' borderRadius="10px" my="5px" ml="5px" />
        <ColorModeSwitch />
    </HStack>
  )
};

export default NavBar;

