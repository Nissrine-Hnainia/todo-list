import {
    ADD_TASK,
    CHECK_TASK,
    EDIT_TASK,
    DELETE_TASK
} from './actionTypes'

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    };
};

export const checkTask = (payload) => {
    return {
        type: CHECK_TASK,
        payload,
    };
};

export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload,
    };
};

export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload,
    };
};