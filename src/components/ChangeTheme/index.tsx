import {useAppSelector} from "@/hooks/redux-hooks.ts";
import {useActions} from "@/hooks/useActions.ts";
import {useCallback, useMemo} from "react";
import {Theme} from "@/typing/theme.ts";
import {StyledSelect} from "@/components/ChangeTheme/styles.ts";

export const ChangeTheme = () => {
    const theme = useAppSelector(state => state.theme.theme);
    const {setTheme} = useActions();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value as Theme)
    }, [])


    const themes = useMemo(() => {
        return [
            {value: 'dark', text: 'Dark', selected: theme === 'dark'},
            {value: 'light', text: 'Light', selected: theme === 'light'}
        ]
    }, [theme])

    return <StyledSelect items={themes} onChange={handleChange} selected={theme}/>;
}