import React from 'react';

const IndividualDonation = ({amount, message, imageUrl}) => {
  console.log(amount, message, imageUrl);
  return (
    <div className="donation">
      <p>£{amount}</p>
      <p>{message}</p>
      <img alt="donor profile picture" src={imageUrl}></img>
    </div>
  );
};

export default IndividualDonation;
