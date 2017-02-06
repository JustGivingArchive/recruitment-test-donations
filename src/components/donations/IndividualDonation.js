import React from 'react';

const IndividualDonation = ({amount, message, imageUrl}) => {
  return (
    <div className="panel">
      <div className="donorinfo">
      <p className="paneltextlarge">£{amount || '?'}</p>
      <img
        className="donorimage"
        alt="donor profile picture"
        src={imageUrl}></img>
      </div>
      <p className="paneltext donormessage">{message}</p>
    </div>
  );
};

export default IndividualDonation;
