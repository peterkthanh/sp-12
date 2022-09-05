import React from "react";
import "./CreamSection.scss";
import gift from "../../assets/gift.png";
import bus from "../../assets/bus.png";
import box from "../../assets/box.png";
import cart from "../../assets/cart.png";
const CreamSection = () => {
  return (
    <>
      <div className="CreamSection">
        <div className="CreamSection_center-text">
          <h1>Good Gifts Made Eays</h1>
        </div>
        <div className="CreamSection_All">
          <div className="CreamSection_All__Exps">
            <div className="CreamSection_All__Exps_gift">
              <img src={gift} alt="" />
            </div>
            <p>Send As A Gift</p>
            <p>Ship Your gift with a free</p>
            <p>Personalized message</p>
          </div>
          <div className="CreamSection_All__Exps">
            <div className="CreamSection_All__Exps_gift">
              <img src={bus} alt="" />
            </div>
            <p>Send As A Gift</p>
            <p>Ship Your gift with a free</p>
            <p>Personalized message</p>
          </div>
          <div className="CreamSection_All_Exps">
            <div className="CreamSection_All__Exps_gift">
              <img src={box} alt="" />
            </div>
            <p>Send As A Gift</p>
            <p>Ship Your gift with a free</p>
            <p>Personalized message</p>
          </div>
          <div className="CreamSection_All__Exps">
            <div className="CreamSection_All__Exps_gift">
              <img src={cart} alt="" />
            </div>
            <p>Send As A Gift</p>
            <p>Ship Your gift with a free</p>
            <p>Personalized message</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreamSection;
