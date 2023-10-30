import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import VansListPage, {
  loader as vanListPageLoader,
} from "/src/pages/Vans/VansListPage";
import VanDetail, {
  loader as VanDetailLoader,
} from "/src/pages/Vans/VanDetail";
import Layout from "/src/components/Layout";
import "./server";
import Dashboard from "/src/pages/Host/Dashboard";
import Income from "/src/pages/Host/Income";
import Reviews from "/src/pages/Host/Reviews";
import HostLayout from "/src/pages/Host/HostLayout";
import HostVans, { loader as HostVansLoader } from "/src/pages/Host/HostVans";
import HostVanDetail, {
  loader as HostVanDetailLoader,
} from "/src/pages/Host/HostVanDetail";
import HostVanPricing from "/src/pages/Host/HostVanPricing";
import HostVanPhotos from "/src/pages/Host/HostVanPhotos";
import HostVanInfo from "/src/pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      ></Route>
      <Route
        path="vans"
        element={<VansListPage />}
        loader={vanListPageLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        loader={VanDetailLoader}
        errorElement={<Error />}
        element={<VanDetail />}
      />
      <Route path="host" errorElement={<Error />} element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          loader={async ({ request }) => await requireAuth(request)}
          element={<Income />}
        />
        <Route
          path="reviews"
          loader={async ({ request }) => await requireAuth(request)}
          element={<Reviews />}
        />
        <Route
          path="vans"
          loader={HostVansLoader}
          errorElement={<Error />}
          element={<HostVans />}
        />
        <Route
          path="vans/:id"
          errorElement={<Error />}
          loader={HostVanDetailLoader}
          element={<HostVanDetail />}
        >
          <Route
            index
            loader={async ({ request }) => await requireAuth(request)}
            element={<HostVanInfo />}
          />
          <Route
            path="pricing"
            loader={async ({ request }) => await requireAuth(request)}
            element={<HostVanPricing />}
          />
          <Route
            path="photos"
            loader={async ({ request }) => await requireAuth(request)}
            element={<HostVanPhotos />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
