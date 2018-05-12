import rootReducer from "./rootReducer"
import { createStore } from 'redux'

export default () => {
    return createStore(rootReducer)
}