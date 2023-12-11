import {HTMLAttributes, useCallback, useState} from "react";
import {StyledChecked, Wrapper} from "./styles.ts";
import CheckedIcon from "@/assets/images/checked.svg";

interface Props extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean
}

export const Checkbox = ({checked = false, onClick, ...props}: Props) => {
    const [value, setValue] = useState(checked);

    const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        setValue(prev => !prev);
        onClick?.(e);
    }, [onClick]);

    return <Wrapper {...props} onClick={handleClick}>
        {value && <StyledChecked src={CheckedIcon} alt="checked"/>}
    </Wrapper>
}