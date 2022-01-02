import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Css/post.css";

const NewPost = () => {
  return(
    <div>
      <div className = "ui sixteen wide column segment">
        <div>
          <BrowserRouter>
            <Link to = "/"><i className = "pencil alternate icon post-icon"></i>Status</Link>
            <Link to = "/"><i className = "camera icon post-icon"></i>Photo/Video</Link>
          </BrowserRouter>
        </div>
        <div className = " ui horizontal divider"></div>
        <div className = "ui comment">
          <div className = "comment">
            <BrowserRouter>
            <Link to = "/ " className = "avatar">
               <img src = ""/> 
            </Link>
            </BrowserRouter>
            <div className = "field"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;