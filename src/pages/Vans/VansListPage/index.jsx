import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.modules.css";

const VansListPage = () => {
  const [pageContent, setPageContent] = useState(null);
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();

      const lengthCheck = data.vans.length;
      if (!response.ok) {
        setPageContent(
          <div className="error">
            Error fetching data from the API. Please try again later.
          </div>
        );
      }
      if (lengthCheck === 0) {
        setPageContent(
          <div className="error">No items are currently listed.</div>
        );
      }

      console.log(data, data.vans.length);
      const styleTag = {
        simple: {
          backgroundColor: "#E17654",
        },
        rugged: {
          backgroundColor: "#115E59",
        },
        luxury: {
          backgroundColor: "#161616",
        },
      };
      setPageContent(
        data.vans.map((van) => {
          return (
            <div className="vanCardContainer" key={van.id}>
              <Link to={`/vans/${van.id}`} className="vanLink">
                <img src={van.imageUrl} className="vanImage" alt={van.name} />
                <div className="vanCardDetail">
                  <div className="vanName">{van.name}</div>
                  <div className="vanPrice">
                    ${van.price}
                    <div className="perDay">/day</div>
                  </div>
                </div>
                <div
                  className="vanTypeTag"
                  style={{ ...styleTag[`${van.type}`] }}
                >
                  {van.type}
                </div>
              </Link>
            </div>
          );
        })
      );
    };
    getResponse();
  }, []);
  return (
    <div>
      <div className="vanPageHeading">Explore our van options.</div>
      <div className="vansListContainer">{pageContent}</div>
    </div>
  );
};

export default VansListPage;
