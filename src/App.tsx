import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
