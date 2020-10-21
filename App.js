import React from 'react';
import './App.css';
import Choices from './choiceComponent'
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Choices />
      </BrowserRouter>
    </div>
  );
}

export default App;
