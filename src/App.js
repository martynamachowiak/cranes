import React from "react";
import "./App.css";
import Header from "./components/Header";
import Crane from "./components/Crane";
import Cranes from "./components/Cranes";

function App() {
  const messages = {
    title: "Roy Molloy’s Marvellous Cranes",
    paragraph: "I'm a child as well as all the pics below",
  };
  return (
    <div className="App">
      <Header message={messages.title} />
      <Cranes>
        <p>I'm a child as well as all the pics below</p>
        <Crane />
        <Crane />
        <Crane />
      </Cranes>
    </div>
  );
}

export default App;
