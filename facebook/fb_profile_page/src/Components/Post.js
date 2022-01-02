import React from 'react';
import Faker from 'faker';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Css/post.css";
import PostComments from './PostComments';

const Post = ({currentUsername, singlePost, key}) => { 
    return(
      <div className = "ui segment post" key={key}>
        <div className = "avatar-container">
          <img className = "avatar-image" src= {Faker.image.image()}/>
          <div className = "content name-content">
            <span>{currentUsername}</span>
            <div>1 min <i className = "globe icon"></i></div>
        </div>
        </div>
        <div className = "ui basic segment post-feed">
          <p>{singlePost.body}</p>
        </div>
        <div className = "ui segment embeded-post">
          <img className = "post-image" src = {Faker.image.image()}></img>
        </div>
        <div className = "ui divider"></div>
        <div> 
          <BrowserRouter>
            <Link to = "/"><i className = "like icon post-icon"></i>Like</Link>
            <Link to = "/"><i className = "comment icon post-icon"></i>Comment</Link>
            <Link to = "/"><i className = "share icon post-icon"></i>Share</Link>
          </BrowserRouter>
        </div>
         <div>
           <PostComments currentUsername = {currentUsername} singlePost = {singlePost}/>
           </div>
      </div>
  );
}

export default Post;