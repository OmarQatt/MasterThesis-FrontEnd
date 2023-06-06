import "./App.css";





import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/404";
import About from "./components/About";
import Dashboard from "./components/admin/Dashboard";
import Contact from "./components/Contact";
import Letter from "./components/Letter/Letter"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { useSelector } from "react-redux";
import Login from "./components/user/login";
import Signup from "./components/user/signup";
import { selectIsAuth } from "./components/store/features/authSlicer";
import { useState } from "react";

function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/signup" element={ <Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/letter" element={<Letter />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
