import "./styles.modules.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="main-body-container">
        <div>
          <p className="body--title">
            You got the travel plans, we got the travel vans.
          </p>
        </div>
        <div className="body--description-container">
          <p className="body--text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="get-van-button">Find your Van</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
