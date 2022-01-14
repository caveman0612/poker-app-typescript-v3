import React, { useState } from "react";
import ActiveVillian from "./ActiveVillian";

const Villian = ({ setBoard, board, position }: any) => {
  const { villians } = board;

  function addVillian() {
    setBoard((prev: any) => {
      return {
        ...prev,
        villians: prev.villians.map((person: any, idx: number) => {
          if (idx === position) return true;
          else return person;
        }),
      };
    });
  }
  function positionLocation(position: number) {
    if (position === 1 || position === 3) return "top";
    else if (position === 0 || position === 4) return "bottom";
    else if (position === 2) return "middle";
  }

  return (
    <div className={`Villian ${positionLocation(position)}`}>
      {villians[position] ? (
        <ActiveVillian board={board} setBoard={setBoard} position={position} />
      ) : (
        <button onClick={addVillian}>Add Player</button>
      )}
    </div>
  );
};

export default Villian;
