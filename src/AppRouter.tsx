import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "./App";

export const AppRouter = () => {
  const userAuth = false;

  return userAuth ? (<Routes>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
  </Routes>)
    :
    ()
};
