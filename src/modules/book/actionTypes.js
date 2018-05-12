import {namespace} from "./constants";
import {defineAction} from 'redux-define'

export const GET_BOOK = defineAction("GET_BOOK",['PENDING', 'SUCCESS', "REJECTED"],namespace);


//pending, sucess, rejected (need 1 action typ for each in promise)