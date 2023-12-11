import React from 'react';
import {useAppSelector} from "@/hooks/redux-hooks.ts";
import {Todo} from "@/components/Todo";
import {Line, StyledList, Wrapper} from "@/components/TaskList/styles.ts";

export const TaskList = () => {
    const [todos, theme] = useAppSelector(state => [state.todos.items, state.theme.theme]);


    return <Wrapper $theme={theme}>
        <h2>Task list</h2>
        <StyledList>
            <Line/>
            {todos?.map(({id, text, selected}) => (
                <React.Fragment key={id}>
                    <Todo id={id} text={text} selected={selected}/>
                    <Line/>
                </React.Fragment>
            ))}
        </StyledList>
    </Wrapper>
}