import React from "react";
import { useSelector } from "react-redux";
import Blog from "./components/Blog";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar />
      {isSignedIn && <Blog />}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
