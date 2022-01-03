import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import faker from 'faker';
import "./Css/SideMenu.css";

const SideMenu = ({currentUsername}) => {
  
  return(
    <div>
      <div className = "ui secondary vertical pointing menu right-menu">
        <div className = "ui card">
          <div className = "image">
            <img className = "ui medium bordered image user-image" src= {faker.image.image()}/>
          </div>
          <div className = "content">
            <p className = "header"> Leanne Graham </p>
            <div className = "meta">
              <p> @username </p>
            </div>
          </div>
        </div>
        <BrowserRouter>
          <Link to ="/" className = "active item"> Posts </Link>
          <Link to ="/" className = "item"> Comments </Link>
          <Link to ="/" className = "item"> Likes </Link>
          <Link to ="/" className = "item"> Shares </Link>
          <Link to ="/" className = "item"> Videos </Link>
        </BrowserRouter>
        <button className = "positive ui button"> Create a Page </button>
      </div>
    </div>
  );
};

export default SideMenu; 