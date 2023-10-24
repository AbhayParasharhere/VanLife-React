import "./styles.modules.css";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import AboutHeaderImage from "/public/images/about_header_image.png";

const About = () => {
  return (
    <div className="container">
      <div>
        <img
          src={AboutHeaderImage}
          className="image"
          alt="About Header Image"
        />
      </div>
      <div className="mainText">
        Don’t squeeze in a sedan when you could relax in a van.
      </div>
      <div className="bodyText">
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="calloutSection">
        <div className="calloutText">
          Your destination is waiting. Your van is ready.
        </div>
        <button className="calloutButton">Explore our vans</button>
      </div>
    </div>
  );
};

export default About;
