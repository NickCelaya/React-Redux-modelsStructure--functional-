import {namespace} from "./constants"


// export const name = (state) => state.book.name;
// export const authorName = (state) => state.book.author;        breaks if namespace changes
// export const publishDate = (state) => state.book.publishDate;

export const _todos = (state) => state[namespace];
export const todos = (state) => _todos(state).todos;
export const task = (state) => _todos(state).task
export const complete = (state) => _todos(state).complete