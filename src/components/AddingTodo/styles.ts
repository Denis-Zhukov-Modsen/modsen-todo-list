import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 50px;
  width: 100%;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLabel = styled.label`
  ${({theme})=>css`
    grid-column: 1/3;
    color: ${theme.colors.blue};
    font-size: ${theme.fontSizes.sm}px;

    @media screen and (max-width: 550px) {
      grid-column: 1/2;
    }
  `}
`;