import {useCallback, useId, useState} from "react";
import {StyledInput, StyledLabel, Wrapper} from "./styles.ts";
import {Button} from "@/components/Button";
import {useActions} from "@/hooks/useActions.ts";
import {Todo} from "@/typing/todo.ts";

interface Props {
    todo: Todo
    onClose: () => void
}

export const EditTodo = ({todo: {id, text}, onClose}: Props) => {
    const idLabel = useId();
    const {updateItem} = useActions();

    const [value, setValue] = useState(text);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, []);

    const handleClick = useCallback(() => {
        updateItem({id, text: value})
        onClose();
    }, [id, value, onClose]);

    return <Wrapper>
        <StyledLabel htmlFor={idLabel}>Название таски: </StyledLabel>
        <StyledInput id={idLabel} value={value} onChange={handleChange}/>
        <Button variant="second" onClick={handleClick}>Сохранить</Button>
    </Wrapper>
}