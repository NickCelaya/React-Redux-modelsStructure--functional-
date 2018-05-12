import * as ActionTypes from "./actionTypes"

const DEFAULT_STATE = {
        todos: ["Learn Redux"],
        error: null,
        isLoading: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
      case ActionTypes.GET_TODO.PENDING:
        return{
            ...state,
            isLoading: true
        }
        case ActionTypes.GET_TODO.SUCCESS:
            return{
                ...state,
                todo: action.payload.todo,
                isLoading: false
            }
            case ActionTypes.GET_TODO.REJECTED:
             return {
                 ...state,
                 error: "IS REJECTED",
                 isLoading: false
             }
        default:
          return state
    }
}