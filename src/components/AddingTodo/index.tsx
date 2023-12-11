import {Input} from "@/components/Input";
import {Button} from "@/components/Button";
import {useCallback, useId, useState} from "react";
import {useActions} from "@/hooks/useActions.ts";
import {StyledLabel, Wrapper} from "./styles.ts";

export const AddingTodo = () => {
    const [task, setTask] = useState('');
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }, [])

    const {addTodo} = useActions();

    const handleAdd = useCallback(() => {
        addTodo(task);
    }, [task]);

    const id = useId();

    return <Wrapper>
        <StyledLabel htmlFor={id}>Add a new task</StyledLabel>
        <Input id={id} value={task} onChange={handleChange}/>
        <Button onClick={handleAdd}>Add todo</Button>
    </Wrapper>
}