import React from 'react';

const IndividualCharity = ({ name, id, toggle, select }) => {
  return (
    <div onClick={() => select(id)} className="panel">
      <p className="subtitle">{name}</p>
    </div>
  );
};

export default IndividualCharity;
