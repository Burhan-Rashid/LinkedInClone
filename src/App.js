import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
