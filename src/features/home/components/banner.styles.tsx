import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const BannerImage = styled.ImageBackground.attrs({
  source: require("@/mock-data/banner/2.jpg"),
})`
  position: fixed;
  flex: 1;
  z-index: 0;
`;

const Overlay = styled(LinearGradient)`
  position: fixed;
  flex: 1;
  z-index: 1;
`;

export { BannerImage, Overlay };

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);
