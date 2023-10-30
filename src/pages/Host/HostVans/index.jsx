import { Suspense } from "react";
import { Link, useLoaderData, Await, defer } from "react-router-dom";
import "./styles.modules.css";
import { getHostVans } from "/src/api";
import { requireAuth } from "/src/utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
};
const HostVans = () => {
  const vansPromise = useLoaderData();
  const hostVansLoader = (vans) => {
    const hostVansElem = vans.map((van) => {
      return (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          <section>{hostVansElem}</section>
        </div>
      </section>
    );
  };

  return (
    <Suspense fallback={<h1>Loading vans....</h1>}>
      <Await resolve={vansPromise.vans}>{hostVansLoader}</Await>
    </Suspense>
  );
};

export default HostVans;
