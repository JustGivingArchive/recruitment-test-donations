import React from "react";
import ReactDOM from "react-dom";

import './CharityItem.css'

const CharityItems = (props) => {
  return (
  <div className="charity-items">
     <img src={`${props.logo}`}/>
      <h1>{props.name}</h1>
      <p>{props.impactStatementWhat}</p>
      <p>{props.impactStatementWhy}</p>
    </div>
  )
};

export default CharityItems;
