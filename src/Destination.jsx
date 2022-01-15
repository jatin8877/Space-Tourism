import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "./Data";
const Destination = () => {
  const [idx, setData] = useState(0);

  const updatePlanet = (elm) => {
    let idx;
    idx = elm.target.parentNode.id;
    setData(idx);
  };

  return (
    <>
      <section className="container destination-container">
        <div className="home flex flex-sp-bt-al-center ">
          <div className="home-text flex flex--column planet">
            <h3>
              01 <span> Pick your destination</span>
            </h3>
            <img src={data[idx].images} alt="planet-image" />
          </div>

          <div className="home-image flex flex--column">
            <nav className="destination-nav">
              <ul className="flex">
                <li>
                  <NavLink
                    to={"#"}
                    id="0"
                    className="nav-item"
                    onClick={updatePlanet}
                  >
                    <span>MOON</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#"}
                    id="1"
                    className="nav-item"
                    onClick={updatePlanet}
                  >
                    <span>MARS</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#"}
                    id="2"
                    className="nav-item"
                    onClick={updatePlanet}
                  >
                    <span>EUROPE</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"#"}
                    id="3"
                    className="nav-item"
                    onClick={updatePlanet}
                  >
                    <span>TITAN</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <h1>{data[idx].name}</h1>
            <p className="para">{data[idx].description}</p>
            <div className="planet-info flex">
              <div className="distance">
                <p>Avg. distance</p>
                <h2>{data[idx].distance}</h2>
              </div>
              <div className="travel-time">
                <p>Est. travel time</p>
                <h2>{data[idx].travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
