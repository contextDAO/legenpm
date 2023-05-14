import React, { useEffect, useState } from 'react';
import Card from './Card';
import Details from './Details';

const List = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Fetch the contracts data from the API
    fetch('https://testrpc.ctx.xyz/schemas?type=code')
      .then((response) => response.json())
      .then((data) => setDocuments(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleCardClick = (card) => {
    console.log(card);
    setSelectedCard(card);
    fetch(`https://ctx.xyz/${card.name}/${card.subname}?ctx=true`)
      .then((response) => response.json())
      .then((data) => setCode(data))
      .catch((error) => console.log(error));
    
  };

  return (
    <div className="flex workarea">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Cards</h2>
        {documents.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              subname = {card.subname}
              chain = {card.docChain}
              address = {card.docAddress}
              onClick={() => handleCardClick(card)}
            />
        ))}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        {selectedCard ? (
          <Details card={selectedCard} code={code}/>
        ) : (
          <p>No card selected</p>
        )}
      </div>
    </div>
  );
};

export default List;

