import React, { useState } from "react";
import Card from "../Selector/Card";

const Player = ({ setBoard, board }: any) => {
  const { holeCards, selectedCards } = board;
  return (
    <div className="Player">
      {holeCards.map((item: string) => {
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

export default Player;
