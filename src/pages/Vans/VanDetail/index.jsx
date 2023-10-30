import React from "react";
import { useLocation, Link, useLoaderData } from "react-router-dom";
import "./styles.modules.css";
import { getVans } from "/src/api";

export const loader = ({ params }) => {
  return getVans(params.id);
};
const VanDetail = () => {
  const van = useLoaderData();
  const location = useLocation();
  const search = location.state?.search || "";

  return (
    <div className="van-detail-container">
      <div className="van-detail">
        <Link to={`..${search}`} relative="path" className="back-button">
          &larr;{" "}
          <span>Back to {search.length > 1 ? van.type : "all"} vans</span>
        </Link>
        <img src={van.imageUrl} />
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
};

export default VanDetail;
