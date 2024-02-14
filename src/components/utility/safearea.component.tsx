import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export default SafeArea;
