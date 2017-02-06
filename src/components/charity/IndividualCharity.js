import React from 'react';

const IndividualCharity = ({ name, id, toggle, select }) => {
  return (
    <div onClick={() => select(id)} className="panel hoverable">
      <p className="paneltextlarge">{name}</p>
    </div>
  );
};

export default IndividualCharity;
