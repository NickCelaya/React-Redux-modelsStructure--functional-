import * as ActionTypes from "./actionTypes"

const DEFAULT_STATE = {
        book: [],
        error: null,
        isLoading: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case ActionTypes.GET_BOOK.PENDING:
        return{
            ...state,
            isLoading: true
        }
        case ActionTypes.GET_BOOK.SUCCESS:
            return{
                ...state,
                todo: action.payload.book,
                isLoading: false
            }
            case ActionTypes.GET_BOOK.REJECTED:
             return {
                 ...state,
                 error: "IS REJECTED",
                 isLoading: false
             }
        default:
          return state
    }
}