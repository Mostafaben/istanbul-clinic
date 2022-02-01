import { IMAGES, INFOS } from "../data/data";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="row">
        <div className="col col-12 col-lg-4 col-xl-4 about">
          <h4>About us</h4>
          <p>
            With more than 7 years experience, BEST CLINIC ISTANBUL has a high
            level of health service in accordance with international standards
            and at a reasonable price. We attract our patients from all around
            the world, especially from Europe and the Middle East, and provide
            them an accurate and reliable health services where we focus on
            patient’s comfort.
          </p>
          <img src={IMAGES.WHITE_LOGO} alt="logo" />
          <div className="img-inline">
            <img src={require("./../assets/iso.png")} alt="iso" />
            <img src={require("./../assets/iso 2.png")} alt="iso 2" />
          </div>
        </div>
        <div className="col col-12 col-lg-4 col-xl-4">
          <h4>Contact us</h4>
          <div className="contact-link">
            <i className="fas fa-map-marker-alt"></i>
            <p>Address: Atakent, 4. Cd. No:36, 34307 Küçükçekmece/İstanbul</p>
          </div>

          <div className="contact-link">
            <i className="fas fa-phone"></i>
            <p>{INFOS.phoneNumber}</p>
          </div>
          <div className="contact-link">
            <i className="far fa-envelope"></i>
            <p>{INFOS.clinicEmail}</p>
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
