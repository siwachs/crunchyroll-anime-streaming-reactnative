import {
  BannerContainer,
  BannerImage,
  BannerTextContainer,
  Description,
  SubTitle,
  Title,
  WatchNowButtonContainer,
  WatchNowButtonText,
} from "./banner.styles";

import { Feather } from "@expo/vector-icons";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <BannerTextContainer>
          <Title>Solo Leveling</Title>
          <SubTitle>Dub | Sub</SubTitle>
          <Description numberOfLines={3}>
            They say whatever doesn’t kill you makes you stronger, but that’s
            not the case for the world’s weakest hunter Sung Jinwoo. After being
            brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo
            came back with the System, a program only he could see, that’s
            leveling him up in every way. Now, he’s inspired to discover the
            secrets behind his powers and the dungeon that spawned them.
          </Description>
          <WatchNowButtonContainer>
            <Feather name="play" size={24} color="black" />
            <WatchNowButtonText>Watch Now</WatchNowButtonText>
          </WatchNowButtonContainer>
        </BannerTextContainer>
      </BannerImage>
    </BannerContainer>
  );
};

export default Banner;
