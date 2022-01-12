import React, { useState } from "react";

const Card = ({ suit, card, cards, setCards }: any) => {
  function highlightedCards(name: string) {
    if (cards.holeCards.includes(name) || cards.tableCards.includes(name)) {
      return "selectedLocked";
    } else if (cards.selectedCards.includes(name)) {
      return "selected";
    }
    return "";
  }

  function selectCard(event: any) {
    const name = event.target.alt;
    if (cards.holeCards.includes(name) || cards.tableCards.includes(name)) {
      return;
    }
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
        className={`${highlightedCards(`${suit}${card}`)}`}
        onClick={selectCard}
      />
    </div>
  );
};

export default Card;
