import { LinearGradient } from "expo-linear-gradient";

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
