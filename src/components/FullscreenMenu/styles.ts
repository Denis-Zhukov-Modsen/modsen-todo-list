import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;

    align-items: center;

    flex-direction: column;
    position: absolute;
    left: 0;
    top: 215px;

    width: 100vw;
    height: 100vh;
    background: ${theme.colors.blue};
  `}
`;

export const StyledLink = styled(Link)<{ $active: boolean }>`
  ${({theme, $active}) => css`
    font-size: ${theme.fontSizes.xl}px;

    text-decoration: none;
    font-weight: ${$active ? `bold` : 'normal'};
    color: ${$active ? theme.colors.gray : theme.colors.white};
    outline: none;
  `}
`;


export const Menu = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;