import React, { useState } from "react";
import Card from "./Card";

const Row = ({ suit, setBoard, board }: any) => {
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
    "T",
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
            board={board}
            setBoard={setBoard}
            key={`${suit}${card}`}
          />
        );
      })}
    </div>
  );
};

export default Row;
