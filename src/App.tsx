import "./App.css"

import { Outlet } from "react-router";

import Navbar from "./components/Navbar/Navbar";

function App() {

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
