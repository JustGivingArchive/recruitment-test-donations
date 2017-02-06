import React from 'react';

import Charity from './charity/Charity.js';
import Donations from './donations/Donations.js';
import CharitySelector from './charity/Charityselector.js';
import Intro from './Intro.js';
import SeeMore from './Seemore.js'

const Content = (props) => {
  if (props.dropDown) {
    return (
      <div>
        <Intro />
        <CharitySelector select={props.select} />
      </div>
    )
  }

  if (props.charityLoaded && props.donationsLoaded) {
    return (
      <div>
        <Charity info={props.charityInfo} />
        <Donations donations={props.donations} />
        {!props.dropDown && <SeeMore toggle={() => props.toggle()} />}
      </div>
    );
  }

  return (
      <div className="loader"></div>
  );
};

export default Content;
