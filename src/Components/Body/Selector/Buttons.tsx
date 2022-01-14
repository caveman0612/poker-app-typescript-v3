import React, { useState } from "react";

const Buttons = ({ board, setBoard }: any) => {
  function resetAllCards() {
    setBoard((prev: any) => {
      return {
        ...prev,
        holeCards: [],
        selectedCards: [],
        tableCards: [],
      };
    });
  }

  function addHoleCards() {
    if (board.selectedCards.length === 2) {
      setBoard((prev: any) => {
        return {
          ...prev,
          holeCards: [...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else {
      alert("Can only take two cards");
    }
  }

  function addFlopCards() {
    if (board.selectedCards.length === 3) {
      setBoard((prev: any) => {
        return {
          ...prev,
          tableCards: [...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else alert("flop cards can only have three cards");
  }

  function addTurnCards() {
    if (board.selectedCards.length === 1 && board.tableCards.length === 3) {
      setBoard((prev: any) => {
        return {
          ...prev,
          tableCards: [...prev.tableCards, ...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else alert("turn cards can only be one and you need 3 table cards");
  }

  function addRiverCards() {
    if (board.selectedCards.length === 1 && board.tableCards.length === 4) {
      setBoard((prev: any) => {
        return {
          ...prev,
          tableCards: [...prev.tableCards, ...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else alert("river cards can only be one and you need 4 table cards");
  }

  return (
    <div className="Buttons">
      <button className="Button" onClick={resetAllCards}>
        Reset All Cards
      </button>
      <button className="Button" onClick={addHoleCards}>
        Add Hole Cards
      </button>
      <button className="Button" onClick={addFlopCards}>
        Add Flop Cards
      </button>
      <button className="Button" onClick={addTurnCards}>
        Add Turn Cards
      </button>
      <button className="Button" onClick={addRiverCards}>
        Add River Cards
      </button>
    </div>
  );
};

export default Buttons;
