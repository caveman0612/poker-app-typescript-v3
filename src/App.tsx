import React, { useState } from "react";
import Header from "./Components/Header";
import Selector from "./Components/Body/Selector/Selector";
import Board from "./Components/Body/Table/Board";
import Controller from "./Components/Body/Selector/Controller";

const App = () => {
  const [cards, setCards] = useState({
    holeCards: ["HA", "HK"],
    tableCards: [],
    selectedCards: [],
    villians: Array(5),
  });
  return (
    <div className="App">
      <Header />
      <Selector cards={cards} setCards={setCards} />
      <Controller />
      <Board cards={cards} setCards={setCards} />
    </div>
  );
};

export default App;
