import React from 'react';

const Card = ({ name, subname, chain, address, onClick }) => {
  return (
    <div className="bg-white p-4 m-6 rounded shadow cursor-pointer" onClick={onClick}>
      <p className="text-lg mb-2">{name}/{subname}</p>
      <p className="text-sm mb-2">{chain}</p>
      <p className="text-sm mb-2">{address}</p>
    </div>
  );
};

export default Card;