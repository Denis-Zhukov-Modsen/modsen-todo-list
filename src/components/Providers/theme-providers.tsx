import {darkTheme, lightTheme} from "@/constants/theme.ts";
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "@/hooks/redux-hooks.ts";

interface Props {
    children: React.ReactNode
}

export const ThemeProviders = ({children}: Props) => {
    const theme = useAppSelector(state => state.theme.theme);

    return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
    </ThemeProvider>
}