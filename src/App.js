import React from "react";
import { Header, Sidebar, Feed, Widget, Login } from "./components";
import "./App.css";
import { useStateValue } from "./State Provider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
