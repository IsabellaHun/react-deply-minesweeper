import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Fredoka One" }}>Minesweeper</h1>
      {/* Adding the board component which will hold all the other components */}
      <Board />
    </div>
  );
}

export default App;
