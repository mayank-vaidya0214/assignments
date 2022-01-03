import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Css/issue-block.css";
import Faker from 'faker';
import "./Css/issue-block.css";

const IssueBlock = () => {
  return (
    <div className = "ui segment issue-block">
      <p className = "heading-content">Your page is about something that helps someone with the problem they are facing</p>
      <div className="ui divider"></div>
      <div className = "ui comments">
        <div className = "comment">
          <a href ="/" className = "avatar issueblock-avatar">
            <img alt= "avatar image" src = {Faker.image.image()}/>
          </a>
          <div className = "content">
            <a className = "author"> 2190 Likes</a>
              <div className = "text">Tran and 20 other friends</div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default IssueBlock;