import React from "react";
import ReactDOM from "react-dom";
import moneyFormatter from '../../lib/moneyFormatter'
import './CharityDonationsItem.css'

const CharityDonationsItem = (props) => {
  return (
    <div className="charity-donations-item">
        <img src={`${props.imageUrl}`}/>
        <h1>{props.donorDisplayName}</h1> 
        <div>
          <p>donated {moneyFormatter(props.amount)} </p>
          <p>{Date(props.donationDate)}</p>
          <p>{props.message}</p>
        </div>
    </div>
  )
};

export default CharityDonationsItem;