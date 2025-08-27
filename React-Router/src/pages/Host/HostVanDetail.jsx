import React, { useEffect, useState } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { getHostVans } from "../../api";

export function loader({ params }) {
  return getHostVans(params.id);
}

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

const HostVanDetail = () => {
  const currentVan = useLoaderData();
  if (!currentVan) {
    return <h1>Loading ...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav>
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetail;
