import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme})=>css`
    max-width: 100vw;
    overflow: hidden;
    min-height: 100vh;
    background: ${theme.bg.application};
  `}
`;