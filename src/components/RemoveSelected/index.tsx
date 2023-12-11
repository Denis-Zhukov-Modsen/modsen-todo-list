import {useActions} from "@/hooks/useActions.ts";
import {useCallback} from "react";
import {StyledButton} from "@/components/RemoveSelected/styles.ts";

export const RemoveSelected = () => {
    const {removeSelected} = useActions();

    const handleClick = useCallback(() => {
        removeSelected()
    }, [])

    return <StyledButton variant="second" onClick={handleClick}>Deleted selected</StyledButton>
}