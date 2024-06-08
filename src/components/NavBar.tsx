import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='80px' borderRadius="10px" my="5px" ml="5px" />
        <Text>Navbar</Text>
    </HStack>
  )
};

export default NavBar;

