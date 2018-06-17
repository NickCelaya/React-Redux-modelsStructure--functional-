import React from "react";
import { connect } from 'react-redux';
import Nick from "./../index"; 
// import { lifecycle, compose } from "recompose";


export const ToDoContainer = ({ guns, dog }) => (
        <div>
            <ul>
              {guns.map( (todo, index) => <li key={index}>{todo}</li>)}  
            </ul>
            <ul>
            {dog.map( (pup, index) => <li key={index}>{pup}</li> )}
            </ul>
        </div>
    )

const mapStateToProps = (state) =>{
    return {
        guns: Nick.selectors.celaya(state),
        dog: Nick.selectors.puppy(state) 
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