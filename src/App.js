import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar /> 
        <Feed /> 
        <Widget /> 
      </div>
    </div>
  );
}

export default App;
