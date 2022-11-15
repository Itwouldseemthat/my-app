import React from "react";
import FeelSettings from "./feelSettings/FeelSettings";
import Home from "./Home";
import { Routes, Route, Router } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chart" element={<FeelSettings />} />
      </Routes>
    </div>
  )
}

export default App;