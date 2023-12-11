import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';
import {todoActions} from '@/store/slices/todo.slice';
import {themeActions} from '@/store/slices/theme.slice';
import {useAppDispatch} from "@/hooks/redux-hooks";


const actions = {
    ...todoActions,
    ...themeActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};