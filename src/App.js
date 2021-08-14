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
      <div className="content">
        <Sidebar />
        {/* <Main />
      <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
