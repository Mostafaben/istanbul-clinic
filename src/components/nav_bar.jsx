import { IMAGES } from "../data/data";

const NavBar = () => {
  return (
    <nav>
      <img src={IMAGES.FULL_LOGO} alt="logo" />
      <div className="refs">
        <a href="#home">Home</a>
        <a href="#work">Our work</a>
        <a href="#team">Our team</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact us</a>
      </div>
      <div className="call-us">
        <p>Call Us!</p>
        <h3>+905397448686</h3>
      </div>
    </nav>
  );
};

export default NavBar;
