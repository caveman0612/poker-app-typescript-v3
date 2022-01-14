import React, { useState } from "react";
import Buttons from "./Buttons";
import Row from "./Row";

const Selector = ({ setBoard, board }: any) => {
  const suits = ["C", "D", "H", "S"];
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
    "10",
    "J",
    "Q",
    "K",
  ];
  return (
    <div className="Selector">
      <div className="cardRows">
        <div className="Row letterRow">
          {cardValues.map((letter: string) => {
            return <h2 key={letter}>{letter}</h2>;
          })}
        </div>

        {suits.map((suit: string) => {
          return (
            <Row
              suit={suit}
              key={`${suit}`}
              board={board}
              setBoard={setBoard}
            />
          );
        })}
      </div>
      <Buttons board={board} setBoard={setBoard} />
    </div>
  );
};

export default Selector;
