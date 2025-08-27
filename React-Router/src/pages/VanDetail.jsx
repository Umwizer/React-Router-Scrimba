import { useLoaderData, Link, useLocation } from "react-router-dom";
import { getVans } from "../api";

export async function loader({ params }) {
  const vans = await getVans();
  const van = vans.find((v) => v.id === params.id);
  if (!van) {
    throw new Response("Not Found", { status: 404 });
  }
  return van;
}

export default function VanDetail() {
  const van = useLoaderData();
  const location = useLocation();

  const search = location.state?.search ? `?${location.state.search}` : "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; Back to {type.charAt(0).toUpperCase() + type.slice(1)} vans
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} alt={van.name} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
