import "./App.css";
import React from "react";
import Glide from "@glidejs/glide";
import { GALLERY, IMAGES, SERVICES, TEAM, TRIP } from "./data/data";
import Footer from "./components/footer";
import FloatingLinks from "./components/floating_links";
import NavBar from "./components/nav_bar";
import WorkComponent from "./components/work";
import Reservation from "./components/reservation";

function App() {
  React.useEffect(() => {
    // update navbar style when scroll
    document.addEventListener("scroll", (e) => {
      if (e.path[1].scrollY > 50) {
        document.querySelector("nav").classList.add("bg-white");
      } else if (e.path[1].scrollY < 50) {
        document.querySelector("nav").classList.remove("bg-white");
      }
    });
    // mount the carousel
    const glide = new Glide(".hero", {
      type: "carousel",
      animationDuration: 1000,
      autoplay: 2000,
      focusAt: "1",
      startAt: 3,
      perView: 1,
    });
    glide.mount();
  }, []);

  return (
    <>
      <NavBar />
      <section className="banner" id="home">
        <div className="row">
          <div className="col col-12 col-md-12 col-lg-7 introduction">
            <h2>
              Providing Quality Health Care. Your Health is Our Top Priority
              with Comprehensive
            </h2>
            <p>
              Since its inception, BEST CLINIC ISTANBUL has had the most recent
              technology that offers effective solutions and services of the
              highest quality to meet the expectations and desires of our
              patients in all types of cosmetic surgery, hair transplantation,
              and l dental aesthetics.
              <strong style={{ color: "blue" }}>BEST CLINIC ISTANBULS</strong>
              belief is to offer equipment with the latest medical technologies
              alongside with the best-experienced medical team and doctors in
              order to guarantee the perfect results for all our patients.
            </p>
            <a href="#contact">Contact us</a>
          </div>
          <div className="col col-12 col-md-12 col-lg-5 img">
            <img src={IMAGES.DOCTOR} alt="doctor" />
          </div>
        </div>
      </section>
      <WorkComponent />
      <Reservation />
      <section className="trip" id="trip">
        <h2>
          <strong>Your Medical Trip Plan</strong>
        </h2>
        <div className="cards row">
          {TRIP.map((value, index) => (
            <div className="col col-12 col-md-12 col-lg-3 col-xl-3" key={index}>
              <div className="card">
                <img src={value.image} alt="" />
                <h5>{value.title}</h5>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="services" id="services">
        <h2>
          <strong>Our Services</strong>
        </h2>
        <div className="row">
          {SERVICES.map((service, index) => (
            <div
              className="col col-12 col-lg-4 col-xl-4"
              key={`service${index}`}
            >
              <img src={service.image} alt="" />
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="team" id="team">
        <h2>
          <strong>Our team</strong>
        </h2>
        <div className="row">
          {TEAM.map((member, index) => (
            <div
              className="col col-12 col-md-12 col-lg-4 col-xl-4"
              key={`memeber${index}`}
            >
              <div className="member">
                <img src={member.image} alt={member.name} />
                <div className="header">
                  <p>{member.name}</p>
                  <span>{member.job}</span>
                </div>
                <p style={{ color: "#6f8ba4", margin: 0 }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="before-after" id="gallery">
        <div className="wrap">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="glide hero">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {GALLERY.map((value, index) => (
                  <li className="glide__slide" key={`slide${index}`}>
                    <img src={value} alt={`slide${index}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingLinks />
      <div className="copy-right">
        <small>Copyright &copy; 2022 , BEST CLINIC ISTANBUL</small>
      </div>
    </>
  );
}

export default App;
