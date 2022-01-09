import React, { useState } from "react";

const Buttons = ({ name, cards, setCards }: any) => {
  return (
    <div className="Button">
      <button>{name}</button>
    </div>
  );
};

export default Buttons;
