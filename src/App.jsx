import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "/src/components/Home";
import About from "/src/components/About";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import VansListPage from "/src/components/VansListPage";
import "./server";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<VansListPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
