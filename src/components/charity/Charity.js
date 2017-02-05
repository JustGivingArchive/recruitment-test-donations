import React from 'react';

const Charity = ({ info }) => {
  const { charityName, charityDescription, logoUrl, charityWebsite } = info;
  return (
    <div className="charity_container">
      <a href={charityWebsite}>
      <h2>{charityName}</h2>
      <p>{charityDescription}</p>
      <img
        alt={`logo of ${charityName}`}
        src={`http://images.justgiving.com/image/${logoUrl}`}>
      </img>
      </a>
    </div>
  );
};

export default Charity;
