import { Feather, FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

import theme from "@/src/infrastructure/theme";

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderLogo = styled.Image`
  width: 136px;
  height: 24px;
`;

const HeaderRight = styled.View`
  flex-direction: row;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo
        source={require("@/assets/logos/logo.png")}
        resizeMode="contain"
      />
      <HeaderRight>
        <Feather name="cast" size={24} color={theme.colors.text.primary} />
        <FontAwesome5
          name="search"
          size={24}
          color={theme.colors.text.primary}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
