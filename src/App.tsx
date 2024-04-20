import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MainContainer from "./components/MainContainer";
import DateBookingComponent from "./components/Booking/DateBookingComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainContainer component={HomePage} />} />
          <Route
            path="/book"
            element={<MainContainer component={DateBookingComponent} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
