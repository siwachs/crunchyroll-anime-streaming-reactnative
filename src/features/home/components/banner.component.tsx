import { TouchableOpacity } from "react-native";

import {
  BannerContainer,
  BannerImage,
  BannerTextContainer,
  Description,
  OverLay,
  SubTitle,
  Title,
} from "./banner.styles";

const Banner = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <BannerContainer>
        <BannerImage>
          <OverLay
            colors={["rgba(20, 21, 25, 0)", "rgba(20, 21, 25, 0.8)"]}
            start={[0, 0]}
            end={[0, 1]}
          />
          <BannerTextContainer>
            <Title>Solo Leveling</Title>
            <SubTitle>Dub | Sub</SubTitle>
            <Description numberOfLines={3}>
              They say whatever doesn’t kill you makes you stronger, but that’s
              not the case for the world’s weakest hunter Sung Jinwoo. After
              being brutally slaughtered by monsters in a high-ranking dungeon,
              Jinwoo came back with the System, a program only he could see,
              that’s leveling him up in every way. Now, he’s inspired to
              discover the secrets behind his powers and the dungeon that
              spawned them.
            </Description>
          </BannerTextContainer>
        </BannerImage>
      </BannerContainer>
    </TouchableOpacity>
  );
};

export default Banner;
