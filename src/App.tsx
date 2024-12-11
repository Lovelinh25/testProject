import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cloock } from './component/Cloock';
import { Search } from './component/Search/Search';

function App() {
  return (
    <div className="App">
      <Cloock/>
      <Search/>
    </div>
  );
}

export default App;
