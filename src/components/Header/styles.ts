import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.blue};
    min-height: 130px;
    padding: 43px 47px;
  `}
`;

export const Logo = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xl}px;
  `}
`;