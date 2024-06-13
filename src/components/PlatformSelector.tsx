import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/UsePlatforms";

const PlatformSelector = () => {
  const {responseData, error} = usePlatforms();

  if(error) return <Text>{error.message}</Text>;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {responseData?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
