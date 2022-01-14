import React, { useState } from "react";
import Header from "./Components/Header";
import Selector from "./Components/Body/Selector/Selector";
import Board from "./Components/Body/Table/Board";
import Controller from "./Components/Body/Selector/Controller";
import Footer from "./Components/Footer";

const App = () => {
  interface personInterface {
    button: boolean;
    preFlop: string[];
    flop: string[];
    turn: string[];
    river: string[];
  }

  interface boardInterface {
    holeCards: string[];
    tableCards: string[];
    selectedCards: string[];
    villians: (boolean | personInterface)[];
    person: personInterface;
  }

  const startingBoard: boardInterface = {
    holeCards: ["HA", "HK"],
    tableCards: ["S7", "H3", "D8"],
    selectedCards: [],
    villians: Array(5).fill(false),
    person: { button: false, preFlop: [], flop: [], turn: [], river: [] },
  };

  const [board, setBoard] = useState(startingBoard);
  return (
    <div className="App">
      <Header />
      <Selector board={board} setBoard={setBoard} />
      <Controller />
      <Board board={board} setBoard={setBoard} />
      <Footer />
    </div>
  );
};

export default App;
