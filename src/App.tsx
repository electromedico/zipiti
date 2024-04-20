import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainContainer from "./components/blog/MainContainer";
import BookingWizzard from "./components/Booking/BookingWizzard";
import Home from "./components/front/Home";
import './i18n/i18n';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/book"
            element={<MainContainer component={BookingWizzard} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
