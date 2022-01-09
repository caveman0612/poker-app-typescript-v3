import React, { useState } from "react";
import Card from "../Selector/Card";

const Player = ({ setCards, cards }: any) => {
  const { holeCards, selectedCards } = cards;
  return (
    <div className="Player">
      {holeCards.map((item: string) => {
        // console.log(item);
        return (
          <Card
            suit={item[0]}
            card={item[1]}
            cards={cards}
            setCards={setCards}
            key={`H${item[0]}${item[1]}`}
          />
        );
      })}
    </div>
  );
};

export default Player;
