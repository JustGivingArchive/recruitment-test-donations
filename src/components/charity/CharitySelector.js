import React from 'react';
import IndividualCharity from './IndividualCharity.js';

// donations are served from the API as an array, so we can map over them
// and create a donation component for each

const CharitySelector = (props) => {
  const charitys = [{
    name: 'British Heart Foundation',
    id: '183092'
  },
  {
    name: 'Cancer Research UK',
    id: '2357'
  },
  {
    name: 'Macmillan Cancer Support',
    id: '2116'
  },
  {
    name: 'Oxfam',
    id: '13441'
  },
  {
    name: 'National Trust',
    id: '183560'
  },
  {
    name: 'Save the Children',
    id: '18570'
  }
  ];
  return (
    <div className="content_container">
      {charitys.map((charity) => <IndividualCharity select={props.select} {...charity} />)}
    </div>
  );
};

export default CharitySelector;
