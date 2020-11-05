import {ADD_TASK, CHECK_TASK, EDIT_TASK, DELETE_TASK} from '../actions/actionTypes';


const initialState = [];

const taskReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case CHECK_TASK:
            return state.map((item) => item.id === action.payload ? {...item, isDone: !item.isDone} : item);
        case EDIT_TASK:
            return state.map((item) => item.id === action.payload.id ? {...item, description: action.payload.description} : item);
        case DELETE_TASK:
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    };
};


export default taskReducer;
