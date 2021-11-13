import React from "react";
import Header from "../components/layout/Header";
import VoicesList from "../features/VoicesList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <VoicesList />
      </div>
    </div>
  );
}

export default App;
