import React from 'react';

const Charity = ({ info }) => {
  const { charityName, charityDescription, charityWebsite } = info;
  return (
    <a href={charityWebsite}>
    <div className="main_container hoverable">
      <h2 className="subtitle">{charityName}</h2>
      <p className="charity_description">{charityDescription}</p>
    </div>
    </a>

  );
};

export default Charity;
