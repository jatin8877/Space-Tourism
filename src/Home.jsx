import React, { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="container home-container">
        <div className="home flex flex-sp-bt-al-center">
          <div className="home-text flex flex--column">
            <h3> So, you want to travel to</h3>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home-image flex">
            <div className="explore flex flex--center">
              <h2>Explore</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
