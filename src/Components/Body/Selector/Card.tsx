import React, { useState } from "react";

const Card = ({ suit, card, board, setBoard }: any) => {
  function highlightedCards(name: string) {
    if (board.holeCards.includes(name) || board.tableCards.includes(name)) {
      return "selectedLocked";
    } else if (board.selectedCards.includes(name)) {
      return "selected";
    }
    return "";
  }

  function selectCard(event: any) {
    const name = event.target.alt;
    if (board.holeCards.includes(name) || board.tableCards.includes(name)) {
      return;
    }
    if (!board.selectedCards.includes(name)) {
      setBoard((prev: any) => {
        return {
          ...prev,
          selectedCards: [...prev.selectedCards, name],
        };
      });
    } else {
      setBoard((prev: any) => {
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
