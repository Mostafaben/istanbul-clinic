import { IMAGES, RESERVATION, PACKAGE } from "../data/data";

const Reservation = () => {
  return (
    <section className="reservations">
      <div className="row">
        <div className="col col-12 col-md-12 col-lg-5">
          <img src={IMAGES.PACK} alt="reserve" />
        </div>
        <div className="col col-12 col-md-12 col-lg-7">
          <h2>
            <strong>Package</strong>
          </h2>
          <p>
            Best clinic istanbul always tries to offer a package which meets all
            the needs in order to gain your satisfaction. for this month our
            clinic offers a package included
          </p>
          <div className="list">
            {PACKAGE.map((data, index) => (
              <span className="item" key={`${index}-item`}>{data}</span>
            ))}
          </div>
        </div>
        <div className="col col-12 col-md-12 col-lg-7">
          <h2>
            <strong>Reservation</strong>
          </h2>
          <p>to confirm your reservation</p>
          <div className="list">
            {RESERVATION.map((data, index) => (
              <span className="item" key={`item${index}`}>
                {data}
              </span>
            ))}
          </div>
          <a href="#contact">Pick your appointement</a>
        </div>
        <div className="col col-12 col-md-12 col-lg-5">
          <img src={IMAGES.APPOINTEMENT} alt="reserve" />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
