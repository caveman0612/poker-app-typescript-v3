import React, { useState } from "react";

const Card = ({ suit, card, cards, setCards }: any) => {
  function selectCard(event: any) {
    const name = event.target.alt;
    if (!cards.selectedCards.includes(name)) {
      setCards((prev: any) => {
        return {
          ...prev,
          selectedCards: [...prev.selectedCards, name],
        };
      });
    } else {
      setCards((prev: any) => {
        return {
          ...prev,
          selectedCards: prev.selectedCards.filter(
            (item: any) => item !== name
          ),
        };
      });
    }
  }
  return (
    <div className="Card">
      <img
        src={`${process.env.PUBLIC_URL}/images/${suit}/${card}.png`}
        alt={`${suit}${card}`}
        // value={cards.selectedCards}
        // name={`${suit}${card}`}
        onClick={selectCard}
      />
    </div>
  );
};

export default Card;
