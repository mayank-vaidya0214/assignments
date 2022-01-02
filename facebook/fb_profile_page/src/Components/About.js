import React from 'react';
import { BrowserRouter,Link } from 'react-router-dom';
import "./Css/issue-block.css";

const About = () => {
  return (
    <div className = "ui segment about-block issue-block">
      <div>
        About 
          <BrowserRouter>
            <Link to = "/" className = "see-all">See All</Link>
          </BrowserRouter>  
      </div>
      <div>
      < BrowserRouter>
          <i className = "facebook messenger icon about-icons"></i><Link to = "/"> Message Now</Link><br />
          <i className = "globe icon about-icons"></i><Link to = "/">  youtubewebsite.com/</Link> <br />
          <i className = "globe icon about-icons"></i><Link to = "/">  Website</Link>
        </BrowserRouter>  
      </div>
    </div>
  );
};

export default About;