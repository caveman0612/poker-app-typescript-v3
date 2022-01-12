import React, { useState } from "react";

const Buttons = ({ name, cards, setCards }: any) => {
  function resetAllCards() {
    setCards((prev: any) => {
      return {
        ...prev,
        holeCards: [],
        selectedCards: [],
        tableCards: [],
      };
    });
  }

  function addHoleCards() {
    if (cards.selectedCards.length === 2) {
      setCards((prev: any) => {
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
    if (cards.selectedCards.length === 3) {
      setCards((prev: any) => {
        return {
          ...prev,
          tableCards: [...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else alert("flop cards can only have three cards");
  }

  function addTurnCards() {
    if (cards.selectedCards.length === 1 && cards.tableCards.length === 3) {
      setCards((prev: any) => {
        return {
          ...prev,
          tableCards: [...prev.tableCards, ...prev.selectedCards],
          selectedCards: [],
        };
      });
    } else alert("turn cards can only be one and you need 3 table cards");
  }

  function addRiverCards() {
    if (cards.selectedCards.length === 1 && cards.tableCards.length === 4) {
      setCards((prev: any) => {
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
