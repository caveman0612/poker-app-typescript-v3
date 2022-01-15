import React, { useState } from "react";
import ActionButtons from "./ActionButtons";

const ActiveVillian = ({ setBoard, board, position }: any) => {
  const { villians } = board;

  function removeVillian() {
    setBoard((prev: any) => {
      return {
        ...prev,
        villians: prev.villians.map((person: any, idx: number) => {
          if (idx === position) return false;
          else return person;
        }),
      };
    });
  }

  return (
    <div className="ActiveVillian">
      <button onClick={removeVillian}>X</button>
      <ActionButtons />
    </div>
  );
};

export default ActiveVillian;
