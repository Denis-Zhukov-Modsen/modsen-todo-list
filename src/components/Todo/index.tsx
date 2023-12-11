import {Checkbox} from "@/components/Checkbox";
import {useActions} from "@/hooks/useActions";
import {useCallback, useState} from "react";
import {DeleteButton, EditButton, Task, Wrapper} from "@/components/Todo/styles";
import DeleteIcon from '@/assets/images/delete.svg';
import EditIcon from '@/assets/images/edit.svg';
import {Modal} from "@/components/Modal";
import {EditTodo} from "@/components/EditTodo";

interface Props {
    id: number,
    selected: boolean
    text: string
}

export const Todo = ({id, selected, text}: Props) => {
    const {toggleChecked, removeTodo} = useActions();

    const handleToggle = useCallback(() => {
        toggleChecked(id)
    }, [id]);


    const handleDelete = useCallback(() => {
        removeTodo(id);
    }, [id]);

    const [edit, setEdit] = useState(false);
    const handleClose = useCallback(() => {
        setEdit(false);
    }, [])

    const handleEdit = useCallback(() => {
        setEdit(true);
    }, [id]);

    return <Wrapper>
        <Checkbox checked={selected} onClick={handleToggle}/>

        <Task>{text}</Task>

        <EditButton onClick={handleEdit}>
            <img src={EditIcon} alt="Edit"/>
        </EditButton>

        <DeleteButton onClick={handleDelete}>
            <img src={DeleteIcon} alt="Delete"/>
        </DeleteButton>

        <Modal open={edit} onClose={handleClose}><EditTodo onClose={handleClose} todo={{id, text, selected}}/></Modal>
    </Wrapper>
}