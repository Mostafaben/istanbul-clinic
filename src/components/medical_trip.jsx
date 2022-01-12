import { TRIP } from "../data/data";

const MedicalTrip = () => {
  return (
    <section className="trip" id="trip">
      <h2>
        <strong>Your Medical Trip Plan</strong>
      </h2>
      <div className="cards">
        {TRIP.map((value, index) => {
          return (
            <div
              key={`trip-${index}`}
              className={
                index % 2 === 0
                  ? "row trip-step left-card"
                  : "row trip-step right-card"
              }
            >
              <div className="col col-12 col-md-12 col-lg-6 image-wrapper">
                <img src={value.image} alt={value.title} />
              </div>
              <div className="col col-12 col-md-12 col-lg-6 text-content">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MedicalTrip;
