import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import SideMenu from "./Components/SideMenu";
import CoverPic from "./Components/CoverPic";
import NewPost from "./Components/NewPost";
import PersonalWebsite from "./Components/PersonalWebsite";
import InviteFriends from "./Components/InviteFriends";
import IssueBlock from "./Components/IssueBlock";
import About from "./Components/About";
import Post from "./Components/Post";
import VisitorPost from "./Components/VisitorPost";
import Suggestions from "./Components/Suggestions";
import PostLists from "./Components/PostLists";
import PostComments from "./Components/PostComments";
import "./index.css";
import "./Components/Css/SideMenu.css";
import "./Components/Css/CoverPic.css"
import "./Components/Css/PersonalWebsite.css";

const App = () => {
  return(
    <div className = "posts-container">
      <div className = "ui grid">
        <div className = "sixteen wide column" style = {{ height : "70px" }}>
          <NavigationBar/>
        </div>
      </div>
      <div className = "ui one column grid container" style = {{ height : "100%" }}>
          <div className = "ui row">
            <div className = "four wide column side-menu" style = {{ height : "500px" }}>
              <SideMenu />
            </div>
            <div className = "twelve wide column profile-padding">
              <div className = "ui grid">
                <div className = "ui row">
                  <div className = "sixteen wide column" style = {{ height : "260px" }}>
                    <CoverPic />
                  </div>
                  <div className = "ten wide column" style = {{ height : "100px" }}>
                    <NewPost/>
                  </div>
                  <div className = "ui six wide column grid personal-website-padding">
                    <div className = "ui row personal-website-padding">
                      <div className = "sixteen wide column personal-website-padding">
                        <PersonalWebsite />   
                      </div>
                      <div className = "sixteen wide column invite-friend">
                      <InviteFriends />
                      </div>
                    </div>
                  </div>
                  <div className = "ten wide column">
                    <PostLists />
                  </div>
                  <div className = "six wide column grid issue-block">
                    <div className = "ui row">
                      <div className = "sixteen wide column">
                        <IssueBlock/>
                      </div>
                      <div className = "sixteen wide column">
                        <About />
                      </div>
                      <div className = "sixteen wide column">
                        <VisitorPost />
                      </div>
                      <div className = "sixteen wide column">
                        <Suggestions />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
  
}

export default App;
