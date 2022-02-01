import React from "react";
import { COUNTERS } from "../data/data";

const CounterSection = () => {
  return (
    <section id="counters" className="row">
      {COUNTERS.map((counter) => {
        return (
          <div
            className="col col-12 col-md-12 col-lg-3 col-xl-3"
            key={`${counter.title}`}
          >
            <i className={counter.icon}></i>
            <p>{counter.title}</p>
            <h2>{counter.count}+</h2>
          </div>
        );
      })}
    </section>
  );
};

export default CounterSection;
