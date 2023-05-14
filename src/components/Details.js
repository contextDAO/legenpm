import React from 'react';

const Details = ({ card, code }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {code && (
        <>
            <p className='text-blue-600 mb-8'><h1 className='text-xl'>{card.name}/{card.subname}</h1></p>
            <p className='mb-4'><strong>Name</strong><br/>{code.name}</p>
            <p className='mb-4'><strong>Description</strong><br/>{code.description}</p>
            <p className='mb-4'><strong>Version</strong><br/>{code._context.major}.{code._context.minor}.{code._context.patch}</p>
            <p className='mb-4'><strong>Code</strong><br/><a className='text-blue-600' target="_blank" href={code.sourceTxId}>Source Code</a></p>
            
        </>
      )}
    </div>
  );
};

export default Details;