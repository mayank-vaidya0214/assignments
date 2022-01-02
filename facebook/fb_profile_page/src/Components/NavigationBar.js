import React from "react";
import { Link, BrowserRouter, Router } from "react-router-dom";

const NavigationBar = () => {
   
  return (
    <div>
    <div style = {{backgroundColor : "#3B5998"}} className = "ui inverted segment">
      <div className = "ui inverted secondary menu container ">
        <i style= {{marginTop : "10px"}} className = "large square facebook icon"></i>
        <div className="middle menu">
          <div className = "item">
            <div style={{width : "400px", height : "20px"}} className = "ui icon input">
              <input type = "text" placeholder = "Search..."/>
              <i className= "search link icon"></i>
            </div>
          </div>
        </div>
        <div className = "">
          <a className = "avatar">
            <img src = ""/>
          </a>
        </div>
        <div style = {{alignItems : "center"}} className = "right menu">
          <BrowserRouter>
            <Link to ="/" style = {{color : "white", marginRight : "10px"}}>Home</Link>
            <Link to = "/"><i className = "user icon" style = {{color : "black", marginRight : "10px"}}></i></Link>
            <Link to = "/"><i className = "comment icon" style = {{color : "black", marginRight : "10px"}}></i></Link>
            <Link to = "/"><i className = "globe icon" style = {{color : "black", marginRight : "10px"}}></i></Link>
            <Link to = "/"><i className = "caret down icon" style = {{color : "black", marginRight : "10px"}}></i></Link>
            <Link to = "/"><i className = "lock icon" style = {{color : "black", marginRight : "10px"}}></i></Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NavigationBar;