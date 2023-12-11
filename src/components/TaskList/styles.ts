import styled, {css} from "styled-components";
import {Theme} from "@/typing/theme.ts";

export const Wrapper = styled.div<{ $theme: Theme }>`
  ${({$theme, theme})=>css`
    width: 100%;
    color: ${$theme === 'dark' ? theme.colors.white : theme.colors.black};
  `}
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Line = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 1px;
    background: ${theme.colors.gray};
  `}
`;