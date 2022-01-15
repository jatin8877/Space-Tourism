import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "./TechData";

const Technology = () => {
  const [idx, setData] = useState(0);

  const updatePlanet = (elm) => {
    let idx;
    idx = elm.target.parentNode.id;
    setData(idx);
  };

  return (
    <>
      <section className="container   technology-container destination-container">
        <div className="home flex flex-sp-bt-al-center">
          <div className="home-text flex flex--column planet">
            <h3>
              03 <span>space launch 101</span>
            </h3>
            <div className="details flex flex--center">
              <div>
                <nav className="tech-nav">
                  <ul className="flex flex--column">
                    <li>
                      <NavLink
                        to={"#"}
                        id="0"
                        className="nav-item flex flex--center"
                        onClick={updatePlanet}
                      >
                        <span>1</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"#"}
                        id="1"
                        className="nav-item flex flex--center"
                        onClick={updatePlanet}
                      >
                        <span>2</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"#"}
                        id="2"
                        className="nav-item flex flex--center"
                        onClick={updatePlanet}
                      >
                        <span>3</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="details">
                <p>THE TERMINOLOGY...</p>
                <h1>{data[idx].name}</h1>
                <p>{data[idx].description}</p>
              </div>
            </div>
          </div>

          <div className="home-image flex flex--column">
            <img src={data[idx].images} alt="tech image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
