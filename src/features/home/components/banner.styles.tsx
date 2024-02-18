import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const BannerContainer = styled.View`
  max-width: 100%;
  width: 100%;
  height: 85%;
  overflow: hidden;
`;

const BannerImage = styled.ImageBackground.attrs({
  source: require("@/mock-data/banner/2.jpg"),
})`
  aspect-ratio: 2/3;
  left: 0;
  min-width: 100%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const OverLay = styled(LinearGradient)`
  aspect-ratio: 2/3;
  left: 0;
  min-width: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const BannerTextContainer = styled.View`
  padding: ${({ theme }) => theme.space[4]};
  position: absolute;
  z-index: 1;
  row-gap: 14px;
  top: 290px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato700};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export {
  BannerContainer,
  BannerImage,
  OverLay,
  BannerTextContainer,
  Title,
  SubTitle,
  Description,
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);
