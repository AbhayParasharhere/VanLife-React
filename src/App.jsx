import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import VansListPage from "/src/pages/Vans/VansListPage";
import VanDetail from "/src/pages/Vans/VanDetail";
import Layout from "/src/components/Layout";
import "./server";
import Dashboard from "/src/pages/Host/Dashboard";
import Income from "/src/pages/Host/Income";
import Reviews from "/src/pages/Host/Reviews";
import HostLayout from "/src/pages/Host/HostLayout";
import HostVans from "/src/pages/Host/HostVans";
import HostVanDetail from "/src/pages/Host/HostVanDetail";
import HostVanPricing from "/src/pages/Host/HostVanPricing";
import HostVanPhotos from "/src/pages/Host/HostVanPhotos";
import HostVanInfo from "/src/pages/Host/HostVanInfo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<VansListPage />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
