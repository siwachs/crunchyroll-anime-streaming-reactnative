import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

import IconLogo from "@/src/components/Utilities/icon-logo.component";
import theme from "@/src/infrastructure/theme";

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRight = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: ${(props) => props.theme.space[4]};
`;

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <IconLogo
        imageWidth="136px"
        imageHeight="24px"
        source={require("@/assets/logos/logo.png")}
        resizeMode="contain"
      />
      <HeaderRight>
        <Feather name="cast" size={24} color={theme.colors.text.primary} />
        <IconLogo
          imageWidth="24px"
          imageHeight="24px"
          source={require("@/assets/icons/search.png")}
          resizeMode="contain"
          tintColor={theme.colors.text.primary}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default HomeHeader;
