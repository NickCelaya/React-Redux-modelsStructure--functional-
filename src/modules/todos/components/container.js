import React from "react";
import { connect } from 'react-redux';
import todos from "./../index";
// import { lifecycle, compose } from "recompose";


export const ToDoContainer = ({ todos }) => (
        <div>
            <ul>
              {todos.map( (todo, index) => <li key={index}>{todo}</li>)}  
            </ul>
        </div>
    )

const mapStateToProps = (state) =>{
    return {
        todos: todos.selectors.todos(state)
    }
}

export default connect(mapStateToProps)(ToDoContainer)



//    lifecycle without recompsing

// export default lifecycle({
//     componentDidMount () {
//         this.props.fetchTodos()
//     }
// })(ToDoContainer)



//    proper to use recompose

// export default compose(
//     connect(
//         mapStateToProps
//     ),
//     lifecycle({
//         componentDidMount(){
//             this.props.fetchToDos()
//         }
//     })
// )(ToDoContainer)





// ul>li*3