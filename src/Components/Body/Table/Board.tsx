import React, { useState } from "react";
import CenterCards from "./CenterCards";
import Player from "./Player";
import Villian from "./Villian";

const Board = ({ setCards, cards }: any) => {
  return (
    <div className="Board">
      <div className="topRow">
        <Villian cards={cards} setCards={setCards} position={1} />
        <Villian cards={cards} setCards={setCards} position={2} />
        <Villian cards={cards} setCards={setCards} position={3} />
      </div>
      <CenterCards cards={cards} setCards={setCards} />
      <div className="bottomRow">
        <Villian cards={cards} setCards={setCards} position={0} />
        <Player cards={cards} setCards={setCards} />
        <Villian cards={cards} setCards={setCards} position={4} />
      </div>
    </div>
  );
};

export default Board;
