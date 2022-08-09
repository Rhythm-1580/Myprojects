// import logo from './logo.svg';
import './App.css'; 
import Header from './MyComponents/Header.js';
import {Todos} from './MyComponents/Todos.js';
import {Footer} from './MyComponents/Footer.js';
import {Addtodo} from './MyComponents/Addtodo.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {About} from './MyComponents/About.js';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of detailofstudent", todo);
      
    //deleting in this way is not applicable in react
    
    // let index =todos.indexOf(todo);
    // todos.splice(index,1);
 

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding student detail", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

    // {
    //   sno : 1,
    //   title : "go to market ",
    //   desc: "you need to go to the market to get the job 1"
    // },
    
    // {
    //   sno : 2,
    //   title : "go to market 2 ",
    //   desc: "you need to go to the market2 to get the job 2"
    // },
    
    // {
    //   sno : 3,
    //   title : "go to market 3",
    //   desc: "you need to go to the market3 to get the job 3"
    // },
  // ]);

  return(

<>
<Router>
<Header title="Students List" searchBar={true}/>
{/* if i remove the title then the default title shows here */}
<Switch>
    <Route exact path="/" render={()=>{
return(
  <>
  <Addtodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>
</>)
 }}> 
 </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
<Footer/>
</Router>
</>

)
}

export default App;

//use effect hook 
//The useEffect hook. The useEffect hook is the combination of componentDidMount, componentDidUpdate and componentWillUnmount class lifecycle methods. This hook is the ideal place to set up listeners, fetching data from API and removing listeners before the component is removed from the DOM.