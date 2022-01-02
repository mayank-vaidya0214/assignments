import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Css/issue-block.css";

const VisitorPost = () => {
  return (
    <div className = "ui segment about-block visitor">
      <div>Visit Post
        <i className = "angle right icon right-arrow"></i>
      </div>
      <div className = "ui divider">
      <div>
        <BrowserRouter>
          <Link to = "/" className = "create-post">Create Post</Link>
        </BrowserRouter>
      </div>
      </div>  
    </div>
  );
};

export default VisitorPost;