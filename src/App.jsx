import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MenuList from "./pages/MenuList/MenuList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuList />} />
      </Routes>
    </>
  );
}

export default App;
