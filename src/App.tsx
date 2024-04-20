import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/blog/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/blog/Header";
import Footer from "./components/blog/Footer";
import HomePage from "./components/blog/HomePage";
import MainContainer from "./components/blog/MainContainer";
import DateBookingComponent from "./components/Booking/DateBookingComponent";
import BookingWizzard from "./components/Booking/BookingWizzard";
import Home from "./components/front/Home";

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
