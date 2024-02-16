import styled from "styled-components/native";

const defaultTextStyles = (theme: any) => `
    font-family: ${theme.fonts.lato};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = { body, hint, error, caption, label };

type TypographyTextPropTypes = {
  variant: keyof typeof variants;
};

const TypographyText = styled.Text<TypographyTextPropTypes>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

export default TypographyText;
