import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */
export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-title">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View Details for ${van.name},price at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i classname={`van-type ${van.type} selected `}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van list-container">
      <h1>Explore our Vans Options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
