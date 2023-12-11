import styled, {css} from "styled-components";

export const StyledInput = styled.input`
  ${({theme}) => css`
    border: none;
    outline: none;
    width: calc(100% - 20px);
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.lg}px;
    border-bottom: 4px solid ${theme.colors.gray};
    padding: 0 10px 0 10px;

    &:focus {
      border-bottom: 4px solid ${theme.colors.blue};
    }
  `}
`;