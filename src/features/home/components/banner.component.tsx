import styled from "styled-components/native";

const BannerImage = styled.ImageBackground.attrs({
  source: require("@/mock-data/banner/1.webp"),
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, #14151900, #141519cc);
`;

const Banner = () => {
  return (
    <BannerImage resizeMode="cover">
      <Overlay />
    </BannerImage>
  );
};

export default Banner;
