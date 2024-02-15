import { ImageProps } from "react-native";
import styled from "styled-components/native";

interface IconLogoProps extends ImageProps {
  imageWidth: string;
  imageHeight: string;
}

const IconLogo = styled.Image<IconLogoProps>`
  width: ${(props) => props.imageWidth};
  height: ${(props) => props.imageHeight};
`;

export default IconLogo;
