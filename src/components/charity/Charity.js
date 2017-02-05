import React from 'react';
import '../../styles/charity/charity.scss';

const Charity = ({ info }) => {
  const { charityName, charityDescription, charityWebsite } = info;
  return (
    <a href={charityWebsite}>
    <div className="main_container">
      <h2 className="subtitle">{charityName}</h2>
      <p className="charity_description">{charityDescription}</p>
    </div>
    </a>

  );
};

export default Charity;
