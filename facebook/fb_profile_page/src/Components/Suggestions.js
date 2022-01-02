import React from'react';
import Faker from 'faker';
import "./Css/Suggestions.css"

const Suggestions = () => {
  return(
    <div className = "ui segment suggestions">
      <div> People Also Like </div>
      <div className = "ui divider"></div>
      <img className="ui middle aligned tiny image img" src= {Faker.image.image()} />
      <span> Leanne </span>
      <button className = "button">
        <i className ="thumbs up icon"></i>
          Like 
      </button>

      <div className = "ui divider"></div>
      <img className="ui middle aligned tiny image img" src={Faker.image.image()} />
      <span> Hayden </span>
      <button className = "button">
        <i className ="thumbs up icon"></i> 
          Like 
      </button>

      <div className = "ui divider"></div>
      <img className="ui middle aligned tiny image img" src={Faker.image.image()} />
      <span> Eliseo </span>
      <button className = "button">
        <i className ="thumbs up icon"></i> 
          Like 
      </button>
    </div>
  );
};

export default Suggestions;