import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Widgets from "./components/Widgets";
import { selectUser } from './state/userSlice';
import Register from "./components/Register";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />
      {!user ? <Register /> :
        <div className="content">
          <Sidebar />
          <Main />
          <Widgets />
        </div>
      }
    </div>
  );
}

export default App;
