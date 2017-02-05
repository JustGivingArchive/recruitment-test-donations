import React from 'react';

const IndividualDonation = ({amount, message, imageUrl}) => {
  return (
    <div className="panel">
      <p>£{amount}</p>
      <p>{message}</p>
      <img alt="donor profile picture" src={imageUrl}></img>
    </div>
  );
};

export default IndividualDonation;
