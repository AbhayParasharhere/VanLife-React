import { useOutletContext } from "react-router";
import "./styles.modules.css";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span className="host-van-detail-span">{currentVan.name}</span>
      </h4>
      <h4>
        Category:{" "}
        <span className="host-van-detail-span">{currentVan.type}</span>
      </h4>
      <h4>
        Description:{" "}
        <span className="host-van-detail-span">{currentVan.description}</span>
      </h4>
      <h4>
        Visibility: <span className="host-van-detail-span">Public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
