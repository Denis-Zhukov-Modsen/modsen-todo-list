import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme})=>css`
    display: grid;
    flex-direction: row;
    align-items: center;

    h3 {
      font-size: ${theme.fontSizes.sm}px;
      color: ${theme.colors.white};
      grid-column: 1/3;
    }
  `}
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  outline: none;
  border: none;
  background: transparent;

  img {
    object-fit: contain;
    width: 29px;
    height: 28px;
  }
`;