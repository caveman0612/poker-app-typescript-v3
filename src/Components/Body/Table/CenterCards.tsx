import React, { useState } from "react";

const CenterCards = ({ setCards, cards }: any) => {
  return (
    <div className="CenterCards">
      {cards.tableCards.map((item: string) => {
        const [suit, card] = item.split("");
        return (
          <img
            src={`${process.env.PUBLIC_URL}/images/${suit}/${card}.png`}
            alt={`${suit}${card}`}
            key={`H${suit}${card}`}
          ></img>
        );
      })}
    </div>
  );
};

export default CenterCards;
