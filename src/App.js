import React from 'react';
import logo from './logo.svg';
import OpenSeaDragon from 'openseadragon';
import './App.css';

let externalPath = "../public/images/602.dzi";
let internalPath = "./images/602.dzi";

function App() {
  OpenSeaDragon({
        id: "openseadragon1",
        prefixUrl: "/img/openseadragon/",
        tileSources: internalPath,
      });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
