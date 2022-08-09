import React from 'react'
import {useState} from "react";

export const Addtodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const sumbit =(e)=>{
   e.preventDefault();
   if(!title || !desc){
     alert("student (name or branch) cannot be empty")
   }else{
   props.addTodo(title,desc);
   setTitle("");
   setDesc("");
  }}
  
    return (
        <div className="container my-3">
          <h3>
            ADD A STUDENT DETAILS
          </h3>
            <form onSubmit={sumbit}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">Student Name</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Student Branch</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">ADD IN LIST</button>
</form>
        </div>
    )
}

// e= event --the use of {e} is to set the event in the react app  
//e.preventDefault(); ==> page not even reloaded 
  