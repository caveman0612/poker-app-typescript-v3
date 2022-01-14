import React, { useState } from "react";

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
      <div className="actionButtons">
        <button>fold</button>
        <button>call</button>
        <button>raise</button>
      </div>
      <input type="checkbox" className="buttonLocation" />
    </div>
  );
};

export default ActiveVillian;
