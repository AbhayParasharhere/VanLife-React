import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/components/Home";
import About from "/src/components/About";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import VansListPage from "/src/components/VansListPage";
import VanDetail from "/src/components/VanDetail";
import "./server";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<VansListPage />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
