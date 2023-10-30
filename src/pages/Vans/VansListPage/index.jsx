import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import "./styles.modules.css";
import { getVans } from "../../../api";
import { Suspense } from "react";

export const loader = () => {
  const vansPromise = getVans();
  return defer({ vans: vansPromise });
};

const VansListPage = () => {
  const vansPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const renderVans = (vans) => {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
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
    return (
      <div>
        <div className="vanPageHeading">Explore our van options.</div>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={`van-type simple ${
              typeFilter === "simple" && "selected"
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`van-type rugged ${
              typeFilter === "rugged" && "selected"
            }`}
          >
            Rugged
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`van-type luxury ${
              typeFilter === "luxury" && "selected"
            }`}
          >
            Luxury
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="van-type clear-filters"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="vansListContainer">
          {displayedVans?.length === 0 ? (
            <div className="error">No items are currently listed.</div>
          ) : (
            displayedVans?.map((van) => (
              <div className="vanCardContainer" key={van.id}>
                <Link
                  to={van.id}
                  state={{ search: `?${searchParams.toString()}` }}
                  className="vanLink"
                >
                  <img src={van.imageUrl} className="vanImage" alt={van.name} />
                  <div className="vanCardDetail">
                    <div className="vanName">{van.name}</div>
                    <div className="vanPrice">
                      ${van.price}
                      <div className="perDay">/day</div>
                    </div>
                  </div>
                  <div className="vanTypeTag" style={{ ...styleTag[van.type] }}>
                    {van.type}
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  return (
    <Suspense fallback={<h1>Loading Vans</h1>}>
      <Await resolve={vansPromise.vans}>{renderVans}</Await>;
    </Suspense>
  );
};

export default VansListPage;
