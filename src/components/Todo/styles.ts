import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Task = styled.div`
    width: 100%;
`;

export const EditButton = styled.button`
  width: 34px;
  height: 39px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 40px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;