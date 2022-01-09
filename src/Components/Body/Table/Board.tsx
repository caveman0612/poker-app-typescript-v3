import React, { useState } from "react";
import CenterCards from "./CenterCards";
import Player from "./Player";
import Villian from "./Villian";

const Board = ({ setCards, cards }: any) => {
  return (
    <div className="Board">
      <div className="topRow">
        <Villian />
        <Villian />
        <Villian />
      </div>
      <CenterCards />
      <div className="bottomRow">
        <Villian />
        <Player cards={cards} setCards={setCards} />
        <Villian />
      </div>
    </div>
  );
};

export default Board;
