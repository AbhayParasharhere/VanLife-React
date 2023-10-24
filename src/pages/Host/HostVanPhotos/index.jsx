import "./styles.modules.css";
import { useOutletContext } from "react-router";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <img src={currentVan.imageUrl} className="host-van-detail-image" />
    </div>
  );
};

export default HostVanPhotos;
