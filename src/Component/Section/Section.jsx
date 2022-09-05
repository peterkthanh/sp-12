import React from "react";
import "./Section.scss";
const Section = () => {
  return (
    <>
      <section className="Section">
        <div className="Section_Content">
          <h1 className="Section_Content-text">
            Be Warn, Merry And Stand Out.
          </h1>
          <button className="Section_Content-button">Discover</button>
        </div>
        <div className="Section_discount">
          <h2>10% off for all product</h2>
        </div>
      </section>
    </>
  );
};

export default Section;
