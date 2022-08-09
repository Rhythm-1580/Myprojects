import React from 'react' 
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
export default function Header(props){
return(
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand">
        {/* props -- it is used to pass the data to parent component to the chhild component
          or if we dont want to use the props keyword we can use curly bracs with the name of 
        component we want to use  */}
        {/* TODOS LIST */}
{props.title}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
      </ul>
{ props.searchBar? <form className="d-flex">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
:
"no search bar"
}
  {/* we can also pass the value by using the java script {} using these curly bracs and thr props keyword 
          and passes the value in that tag */}
    </div>
  </div>
</nav>

);
}

//  propstypes -- it define the type of data which we passing in the props we use 
//  it is used to find the bugs in the code we have written so far 

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
    // isRequired means must
}

//if the user was not setting the arguments then the default view is//

Header.defaultProps ={
  title: "your title here",
  searchBar: true
}