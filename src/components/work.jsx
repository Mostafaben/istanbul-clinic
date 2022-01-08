import React from "react";
import { WORK } from "../data/data";
const RANGE = 4;

const WorkComponent = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedChildIndex, setSelectedChildIndex] = React.useState(null);
  const descriptionRef = React.useRef();
  React.useEffect(() => {
    descriptionRef.current.classList.add("enter-animation");
    setTimeout(
      () => descriptionRef.current.classList.remove("enter-animation"),
      300
    );
  }, [selectedChildIndex, selectedIndex]);
  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setSelectedChildIndex(null);
  };

  const handleItemClick = (index) => {
    if (index === selectedChildIndex) setSelectedChildIndex(null);
    else setSelectedChildIndex(index);
  };

  const changeChild = (direction) => {
    if (direction) {
      if (selectedChildIndex + 1 === WORK[selectedIndex].children.length)
        setSelectedChildIndex(0);
      else setSelectedChildIndex(selectedChildIndex + 1);
    } else {
      if (selectedChildIndex === 0)
        setSelectedChildIndex(WORK[selectedIndex].children.length - 1);
      else setSelectedChildIndex(selectedChildIndex - 1);
    }
  };
  const handleDotClick = (index) => {
    setSelectedChildIndex(index * RANGE);
  }

  return (
    <section className="work" id="work">
      <h2>
        <strong>What we do ?</strong>
      </h2>
      <div className="cards">
        {WORK.map((value, index) => (
          <div
            className={selectedIndex === index ? "card selected-card" : "card"}
            key={`card${index}`}
            onClick={() => handleCardClick(index)}
          >
            <p>{value.title}</p>
          </div>
        ))}
      </div>
      <div className="details">
        <div className="row">
          <div
            className="col col-12 col-md-12 col-lg-5 col-xl-5 sections-container"
            style={{ padding: 0 }}
          >
            <img
              className="cover-image"
              src={
                selectedChildIndex === null
                  ? WORK[selectedIndex].image
                  : WORK[selectedIndex].children.length > 0
                  ? WORK[selectedIndex].children[selectedChildIndex].image
                  : WORK[selectedIndex].image
              }
              alt="child"
            />
            {WORK[selectedIndex].children.length > 0 ? (
              <div className="list-items">
                <div className="dots">
                  {new Array(
                    Math.ceil(WORK[selectedIndex].children.length / RANGE)
                  )
                    .fill(0)
                    .map((_, index) => (
                      <div
                        className={
                          index === Math.floor(selectedChildIndex / RANGE)
                            ? "dot selected-dot"
                            : "dot"
                        }
                        key={`${index}-dot`}
                        onClick={() => handleDotClick(index)}
                      ></div>
                    ))}
                </div>
                <div className="eye">
                  <i className="far fa-eye"></i>
                  <p>
                    {WORK[selectedIndex].title} <br />
                    <span>{WORK[selectedIndex].children.length} sections</span>
                  </p>
                </div>

                {[...WORK[selectedIndex].children]
                  .slice(
                    Math.floor(selectedChildIndex / RANGE) * RANGE,
                    Math.floor(selectedChildIndex / RANGE) * RANGE + RANGE
                  )
                  .map((child, index) => (
                    <div
                      onClick={() =>
                        handleItemClick(
                          index + Math.floor(selectedChildIndex / RANGE) * RANGE
                        )
                      }
                      key={`${child.title}`}
                      className={
                        selectedChildIndex ===
                        index + Math.floor(selectedChildIndex / RANGE) * RANGE
                          ? "item selected-item"
                          : "item"
                      }
                    >
                      <img src={child.image} alt={child.title} />
                      <p>
                        {child.title}
                        <br />
                        <span>{WORK[selectedIndex].title}</span>
                      </p>
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
          <div
            className="col col-12 col-md-12 col-lg-7 col-xl-7 description enter-animation"
            ref={descriptionRef}
          >
            <h5>
              <strong>
                {selectedChildIndex === null
                  ? WORK[selectedIndex].title
                  : WORK[selectedIndex].children.length > 0
                  ? WORK[selectedIndex].children[selectedChildIndex].title
                  : WORK[selectedIndex].title}
              </strong>
            </h5>
            <p>
              {selectedChildIndex === null
                ? WORK[selectedIndex].description
                : WORK[selectedIndex].children.length > 0
                ? WORK[selectedIndex].children[selectedChildIndex].description
                : WORK[selectedIndex].description}
            </p>
            {WORK[selectedIndex].children.length > 0 ? (
              <div className="arrows">
                <i
                  className="fas fa-chevron-left"
                  onClick={() => changeChild(false)}
                ></i>
                <i
                  className="fas fa-chevron-right"
                  onClick={() => changeChild(true)}
                ></i>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;
