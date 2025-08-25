import "./App.css"

import { Outlet } from "react-router";

import Navbar from "./components/Navbar/Navbar";

import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar />

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
