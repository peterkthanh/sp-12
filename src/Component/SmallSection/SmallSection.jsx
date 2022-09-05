import React from "react";
import Slider from "react-slick";
import { dataDigitalBestSeller } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SmallSection.scss";

const SmallSection = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <section className="SmallSection">
        <div className="SmallSection_text">
          <h1>NEW COLLECTION</h1>
        </div>
        <div className="SmallSection_Allcart">
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
              <div className="SmallSection_Allcart__card">
                <div className="SmallSection_Allcart__card__title">
                  <img src={item.linkImg} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className="SmallSection_Allcart__card__price">
                  <h3>{item.price}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="SmallSection__button">
          <button className="SmallSection__button-btn">Xem Thêm</button>
        </div>
      </section>
    </>
  );
};

export default SmallSection;
