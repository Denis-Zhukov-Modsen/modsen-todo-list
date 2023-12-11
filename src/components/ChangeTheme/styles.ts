import styled, {css} from "styled-components";
import {Select} from "@/components/Select";

export const StyledSelect = styled(Select)`
    ${({theme})=>css`
      padding: 18px 21px;
      outline: none;
      border: 1px solid ${theme.colors.borderGray};
      font-size: ${theme.fontSizes.xs}px;
      border-radius: 10px;
    `}
`;