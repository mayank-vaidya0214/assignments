import Faker from "faker";
import React, { useEffect, useState } from 'react';
import jsonPlaceholder from '../Api/jsonPlaceholder';
import "./Css/post.css";

const PostComments = ({currentUsername, singlePost}) => {
  let counter = 1; 
  const [userComments, setUserComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const onUserClick = () => setShowComments(true)

  useEffect(() => {
    singleComment();
  },[]);

  const singleComment = async () => {
    const response = await jsonPlaceholder.get('/comments',{
      postId : counter
    });
    setUserComments(JSON.parse(JSON.stringify(response.data)));
  }
  
  const allComments = userComments && userComments.map(singleUserComment => {
    if(singleUserComment.postId === singlePost.userId) {
      return (
        <div className = "comment">
          <a className = "avatar">
            <img src = {Faker.image.image()} className = "comment-img"/>
          </a>
          <div className = "content">
            <a className = "author comment-content">
              {singleUserComment.email}
            </a>
            <div className = "metadata">
              <span className = "date">1 day ago</span>
            </div>
            <div className = "text comment-content">{singleUserComment.body}</div>
          </div>
        </div>
      );
     }
  }); 
  
  return (
    <div className = "ui segment comment-accordian">
      <div>
        <a onClick ={onUserClick}>
          {showComments ? {allComments} : null}
          <i className = "dropdown icon"> </i>Top Comment 
        </a>
      </div>
      <div className="ui fluid icon input comment-input">
        <input type="text" placeholder="Write a comment..." />
        <i className="camera icon camers-icon" />
      </div>
      <div className = "ui threaded comments">
        <div>{allComments}</div>
      </div>
    </div>
  );
}

export default PostComments;