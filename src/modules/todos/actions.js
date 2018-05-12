import * as actionTypes from "./actionTypes";
import { api } from "./../Root"

export const getTodo = () => {
    return {
        type: actionTypes.GET_TODO,
        payload: api.todo.getTodo()
    }
}

export const saveTodo = () => {
    return {
        type: actionTypes.SAVE_TODO,
        payload: api.todo.saveTodo()
    }
}