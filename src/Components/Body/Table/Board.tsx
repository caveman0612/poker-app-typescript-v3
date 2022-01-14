import React, { useState } from "react";
import CenterCards from "./CenterCards";
import Player from "./Player";
import Villian from "./Villian";

const Board = ({ setBoard, board }: any) => (
  <div className="Board">
    <div className="topRow">
      <Villian board={board} setBoard={setBoard} position={1} />
      <Villian board={board} setBoard={setBoard} position={2} />
      <Villian board={board} setBoard={setBoard} position={3} />
    </div>
    <CenterCards board={board} setBoard={setBoard} />
    <div className="bottomRow">
      <Villian board={board} setBoard={setBoard} position={0} />
      <Player board={board} setBoard={setBoard} />
      <Villian board={board} setBoard={setBoard} position={4} />
    </div>
  </div>
);

export default Board;
