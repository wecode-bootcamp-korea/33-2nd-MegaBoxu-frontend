import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MovieList from './pages/MovieList/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Booking from './pages/Booking/Booking';
import KakaoLogin from './pages/Login/components/KakaoLogin';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

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
        <Route path="/users/kakao/callback" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
