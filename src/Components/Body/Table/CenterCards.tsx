import React, { useState } from "react";

const CenterCards = ({ setBoard, board }: any) => {
  return (
    <div className="CenterCards">
      {board.tableCards.map((item: string) => {
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
