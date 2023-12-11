import styled, {css} from "styled-components";
import {Variant} from "./typing.ts";
import {colors} from "@/constants/colors.ts";

const buttonColors: Record<Variant, string> = {
    primary: colors.blue,
    second: colors.pink
}

export const StyledButton = styled.button<{ $variant: Variant }>`
  ${({theme, $variant}) => css`
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.sm}px;
    background: ${buttonColors[$variant]};
  `}
`;