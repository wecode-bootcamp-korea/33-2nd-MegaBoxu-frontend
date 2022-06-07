import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp.js";
import Login from "./pages/Login/Login.js";
import Main from "./pages/Main/Main.js";
import MovieList from "./pages/MovieList/MovieList.js";
import MovieDetail from "./pages/MovieDetail/MovieDetail.js";
import Booking from "./pages/Booking/Booking.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/moviedetail" element={<MovieDetail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
