import {namespace} from "./constants";
import {defineAction} from 'redux-define'

export const GET_TODO = defineAction("GET_TODOS",['PENDING', 'SUCCESS', "REJECTED"],namespace);

export const SAVE_TODO = "TODO.SAVE_TODO"
export const SAVE_TODO_PENDING = "TODO.SAVE_TODO_PENDING";
export const SAVE_TODO_SUCCESS = "TODO.SAVE_TODO_SUCESSS";
export const SAVE_TODO_REJECTED = "TODO.SAVE_TODO_REJECTED";


//pending, sucess, rejected (need 1 action typ for each in promise)