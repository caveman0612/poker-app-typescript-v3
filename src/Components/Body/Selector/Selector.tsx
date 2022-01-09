import React, { useState } from "react";
import Buttons from "./Buttons";
import Row from "./Row";

const Selector = ({ setCards, cards }: any) => {
  const suits = ["C", "D", "H", "S"];
  return (
    <div className="Selector">
      <div className="cardRows">
        {suits.map((suit: string) => {
          return (
            <Row
              suit={suit}
              key={`${suit}`}
              cards={cards}
              setCards={setCards}
            />
          );
        })}
      </div>
      <div className="buttonSection">
        <Buttons setCards={setCards} cards={cards} name="Add Hole Cards" />
        <Buttons setCards={setCards} cards={cards} name="Add Flop Cards" />
        <Buttons setCards={setCards} cards={cards} name="Add Turn Card" />
        <Buttons setCards={setCards} cards={cards} name="Add River Card" />
      </div>
    </div>
  );
};

export default Selector;
