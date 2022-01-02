import { IMAGES } from "../data/data";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="row">
        <div className="col col-12 col-lg-4 col-xl-4 about">
          <h4>About us</h4>
          <p>
            BEST CLINIC ISTANBULS has over 10 years experience in hair
            transplant operations with perfect results, visitor from the whole
            world, global reputation and high level of service quality
          </p>
          <img src={IMAGES.WHITE_LOGO} alt="logo" />
        </div>
        <div className="col col-12 col-lg-4 col-xl-4">
          <h4>Contact us</h4>
          <div className="contact-link">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Address: Basın Ekspres Yolu, Kavak Sk. No:3, 34197 Yenibosna
              Bahçelievler,İstanbul, Turkey
            </p>
          </div>

          <div className="contact-link">
            <i className="fas fa-phone"></i>
            <p>+905397448686</p>
          </div>
          <div className="contact-link">
            <i className="far fa-envelope"></i>
            <p>Email: info@clinicexpert.net</p>
          </div>
        </div>
        <div className="col col-12 col-lg-4 col-xl-4 call">
          <h4>Let us call you</h4>
          <form>
            <input type="text" name="name" id="name" placeholder="full name" />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="phone number"
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
