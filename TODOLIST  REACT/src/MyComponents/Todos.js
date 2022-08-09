import React from 'react' 
import {TodoItem} from '../MyComponents/TodoItem';
export const Todos = (props) =>{
  let myStyle={
    minHeigth:"100vh"
  }
  return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">Students List</h3>
        {props.todos.length===0? "No details to display":  
        props.todos.map((todo)=>{
            console.log(todo.sno);
            return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
            )
        })
          } 
    </div>
)
}

        
  //map() --it retuens an array function --it is like as the for loop
  // if we rennder the array through the map method we should pass a key 
