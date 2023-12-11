import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${theme.colors.black};
    border-radius: 5px;
    flex-shrink: 0;
    cursor: pointer;
  `}
`;

export const StyledChecked = styled.img`
  width: 30px;
  height: 30px;
  user-select: none;
  pointer-events: none;
`;