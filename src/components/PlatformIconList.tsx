import { Platform } from "../hooks/UseGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from "react-icons/md";
  import { SiNintendo } from "react-icons/si";
  import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // object to map the platform names to icons
  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,

  }

  return (
    <HStack my={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'  />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
