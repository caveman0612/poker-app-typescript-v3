import React, { useState } from "react";
import Card from "../Selector/Card";
import ActionButtons from "./ActionButtons";

const Player = ({ setBoard, board }: any) => {
  const { holeCards, selectedCards } = board;
  return (
    <div className="Player">
      <div className="holeCards">
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

      <div className="playerButtons">
        <div className="buttons">
          <button className="action">fold</button>
          <button className="action">call</button>
          <button className="action">raise</button>
        </div>

        <input type="checkbox" className="buttonLocation" />
      </div>
    </div>
  );
};

export default Player;
