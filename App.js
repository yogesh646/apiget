import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Main from "./subject/Main";
import Page from "./subject/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
