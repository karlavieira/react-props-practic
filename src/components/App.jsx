import React from "react";
import Header from "./Header";
import Dicionario from "./Dicionario";
import emoji from "../emojipedia";

function createDicionario(emoji) {
  return (
    <Dicionario
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
      {emoji.map(createDicionario)}
      {emoji.map(createDicionario)}
      {emoji.map(createDicionario)}
      </dl>
      
    </div>
  );
}

export default App;
