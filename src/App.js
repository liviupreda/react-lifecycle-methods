import React from "react";
import GitHubUserInfo from "./GitHubUserInfo";
import "./App.css";
import ZenQuote from "./ZenQuote";

function App() {
  return (
    <div className="App">
      <ZenQuote />
      {/* <GitHubUserInfo username="facebook" />
      <GitHubUserInfo username="liviupreda" /> */}
    </div>
  );
}

export default App;
