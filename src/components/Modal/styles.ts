import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${theme.colors.blueOpacity};
  `}
`;

export const ModalBody = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.blue};
  `}
`;

export const Close = styled.button`
  ${({theme}) => css`
    align-self: flex-end;
    outline: none;
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm}px;
    background: transparent;
    padding: 10px;
    cursor: pointer;
  `}
`;