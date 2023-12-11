import {colors, darkColors} from "@/constants/colors.ts";
import {FontSizes} from "@/constants/fontSizes.ts";

export const lightTheme = {
    colors: colors,
    fontSizes: FontSizes
}

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
    colors: darkColors,
    fontSizes: FontSizes
}