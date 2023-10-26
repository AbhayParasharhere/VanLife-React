import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./styles.modules.css";

const VanDetail = () => {
  const [van, setVan] = useState({});
  const id = useParams()["id"];
  const url = "/api/vans/" + String(id);
  const location = useLocation();
  const search = location.state?.search || "";
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        return -1;
      }

      setVan(data.vans);
    };
    getResponse();
  }, [id]);
  console.log(search);
  return (
    <div className="van-detail-container">
      {van ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
