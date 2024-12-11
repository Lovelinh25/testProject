import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cloock } from './component/Cloock';
import { Search } from './component/Search/Search';
import Searchs from './component/Search/Searchs';

function App() {
  return (
    <div className="App">
      <Cloock/>
      <Search/>
      <Searchs/>
    </div>
  );
}

export default App;
