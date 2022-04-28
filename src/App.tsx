import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  const [value, setValue] = useState(["default", ""]);

  useEffect(() => {});

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
