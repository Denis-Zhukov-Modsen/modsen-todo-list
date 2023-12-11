import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const StyledLink = styled(Link)<{ $active: boolean }>`
  ${({theme, $active}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xl}px;

    text-decoration: none;
    border-bottom: ${$active ? `2px solid ${theme.colors.white}` : 'none'};
    outline: none;
  `}
`;