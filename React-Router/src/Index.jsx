import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans.jsx";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Review from "./pages/Host/Review.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetail, {
  loader as hostVansDetailsLoader,
} from "./pages/Host/HostVanDetail.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import { requireAuth } from "./utils.js";
import "./Server"; // MirageJS/mock server

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      {/* Protected Host routes */}
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={requireAuth} />
        <Route path="income" element={<Income />} loader={requireAuth} />
        <Route path="reviews" element={<Review />} loader={requireAuth} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVansDetailsLoader}
        >
          <Route index element={<HostVanInfo />} loader={requireAuth} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={requireAuth}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={requireAuth}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
