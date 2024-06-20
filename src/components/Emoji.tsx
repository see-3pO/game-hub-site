import Like from "../assets/like.png";
import Dislike from "../assets/hate.png";
import Target from "../assets/target.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Dislike, alt: "meh" },
    4: { src: Like, alt: "recommended" },
    5: { src: Target, alt: "amazing" },
  };

  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1.5} />;
};

export default Emoji;
