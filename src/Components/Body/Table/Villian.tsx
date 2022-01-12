import React, { useState } from "react";
import ActiveVillian from "./ActiveVillian";

const Villian = ({ setCards, cards, position }: any) => {
  function addVillian() {
    console.log("add villian");
    setCards((prev: any) => {
      return {
        ...prev,
        villians: prev.villians.map((person: any, idx: number) => {
          if (idx === position) return true;
          else return person;
        }),
      };
    });
  }
  const { villians } = cards;
  return (
    <div className="Villian">
      {villians[position] ? (
        <ActiveVillian />
      ) : (
        <button onClick={addVillian}>Add Player</button>
      )}
    </div>
  );
};

export default Villian;
