import {AddingTodo} from "@/components/AddingTodo";
import {TaskList} from "@/components/TaskList";
import {RemoveSelected} from "@/components/RemoveSelected";
import {Wrapper} from "./styles.ts";

export const Main = () => {
    return <Wrapper>
        <AddingTodo/>
        <TaskList/>
        <RemoveSelected/>
    </Wrapper>
};