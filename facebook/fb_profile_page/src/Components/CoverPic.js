import React from 'react';
import "./Css/CoverPic.css";
const CoverPic = () => {
  return(
    <div>
      <div className = "ui segment cover-picture">
        <h2 className = "cover-heading">Add Your Cover Photo</h2>
      </div>
      <div className = "ui container segment extra-btn">
        <button className ="btn"><i className = "thumbs up icon"></i>Like</button>
        <button className ="btn"><i className = "wifi icon"></i>Follow</button>
        <button className ="btn"><i className = "share icon"></i>Share</button>
        <div style = {{textAlign : "right"}}>
          <button className = "btn2">Send Messages</button>
        </div>
      </div> 
    </div>
  );
}

export default CoverPic;