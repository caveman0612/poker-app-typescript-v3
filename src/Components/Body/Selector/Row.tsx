import React, { useState } from "react";
import Card from "./Card";

const Row = ({ suit, setCards, cards }: any) => {
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K",
  ];
  return (
    <div className="Row">
      {cardValues.map((card: string) => {
        return (
          <Card
            suit={suit}
            card={card}
            cards={cards}
            setCards={setCards}
            key={`${suit}${card}`}
          />
        );
      })}
    </div>
  );
};

export default Row;
