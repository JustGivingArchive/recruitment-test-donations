import React from 'react';
import IndividualDonation from './IndividualDonation.js';

// donations are served from the API as an array, so we can map over them
// and create a donation component for each

const Donations = ({ donations }) => {
  return (
    <div className="content_container">
      {donations.map((data, key) => <IndividualDonation
        key={key}
        {...data} />)}
    </div>
  );
};

export default Donations;
