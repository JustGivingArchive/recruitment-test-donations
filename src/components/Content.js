import React from 'react';
import Charity from './charity/Charity.js';
import Donations from './donations/Donations.js';
import CharitySelector from './charity/Charityselector.js';

const Content = (props) => {
  console.log(props);
  if (props.dropDown) {
    return (
      <CharitySelector select={props.select} />
    )
  }

  if (props.charityLoaded && props.donationsLoaded) {
    return (
      <div>
        <Charity info={props.charityInfo} />
        <Donations donations={props.donations} />
      </div>
    );
  }

  return (
      <div className="main_container">
        <h2 className="subtitle">Loading</h2>
      </div>
  );
};

export default Content;
