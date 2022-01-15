import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "./CrewData";

const Crew = () => {
  const [idx, setData] = useState(0);

  const updatePlanet = (elm) => {
    let idx;
    idx = elm.target.parentNode.id;
    setData(idx);
  };

  return (
    <>
      <section className="container destination-container crew-container">
        <div className="home flex flex-sp-bt-al-center">
          <div className="home-text flex flex--column planet">
            <h3>
              02 <span>Meet Your crew</span>
            </h3>
            <div className="details flex flex--column ">
              <div>
                <h2>{data[idx].role}</h2>
                <h1>{data[idx].name}</h1>
                <p>{data[idx].bio}</p>
              </div>
              <div>
                <nav className="crew-nav">
                  <ul className="flex">
                    <li>
                      <NavLink
                        to={"#"}
                        id="0"
                        className="nav-item"
                        onClick={updatePlanet}
                      >
                        <span></span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"#"}
                        id="1"
                        className="nav-item"
                        onClick={updatePlanet}
                      >
                        <span></span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"#"}
                        id="2"
                        className="nav-item"
                        onClick={updatePlanet}
                      >
                        <span></span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"#"}
                        id="3"
                        className="nav-item"
                        onClick={updatePlanet}
                      >
                        <span></span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="home-image flex flex--column">
            <img src={data[idx].images} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Crew;
