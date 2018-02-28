import React from 'react';

const IndividualDonation = ({amount, message, imageUrl}) => {
  return (
    <div className="panel">
      <div className="donorinfo">
      <img
        className="donorimage"
        alt="donor profile picture"
        src={imageUrl}></img>
      <p className="paneltextlarge">£{amount || '--'}</p>
      </div>
      <p className="paneltext donormessage">{message}</p>
    </div>
  );
};

export default IndividualDonation;
