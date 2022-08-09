import React from 'react' 

export  const Footer =() =>{
    let footerStyle = {
    position :"relative",
    top : "70vh",
    width:"100%",
    }
    return(
        <div  style={footerStyle}>
            <p className="text-center bg-secondary">
            Copyrigth &copy; MYSTUDENTSLIST.com  
            </p>
        </div>
    )
}