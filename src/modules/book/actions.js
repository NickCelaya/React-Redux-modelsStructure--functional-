import * as actionTypes from "./actionTypes";
import { api } from "./../Root"

export const getBook = () => {
    return {
        type: actionTypes.GET_BOOK,
        payload: api.book.getBook(),
    }
}

