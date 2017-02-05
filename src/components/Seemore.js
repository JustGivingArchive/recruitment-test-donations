import React from 'react';

const SeeMore = (props) => {
  return (
    <h2 className="seemore" onClick={props.toggle}>See other Charities</h2>
  );
};

export default SeeMore;
