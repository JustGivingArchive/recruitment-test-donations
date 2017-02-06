import React from 'react';

const SeeMore = (props) => {
  return (
    <div onClick={props.toggle} className="panel hoverable">
    <h2 className="paneltextlarge">See other Charities</h2>
    </div>
  );
};

export default SeeMore;
