import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/front/Home";
import './i18n/i18n';
import BookingHome from "./components/Booking/BookingHome";

function App() {
  const languages= navigator.languages;
const preferredLanguage: string = languages[0];

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/*" element={<BookingHome/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
