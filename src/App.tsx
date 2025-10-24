import { useState } from "react";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
    </>
  );
}

export default App;
