import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
function Courosel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",

    pauseOnHover: true,
  };
  const nums = [
    { name: "mahesh" },
    { name: "mahesh2" },
    { name: "mahesh3" },
    { name: "mahesh4" },
    { name: "mahesh5" },
    { name: "mahesh6" },
    { name: "mahesh7" },
    { name: "mahesh2" },
    { name: "mahesh3" },
    { name: "mahesh4" },
    { name: "mahesh5" },
    { name: "mahesh6" },
  ];
  return (
    <div className="slides">
      <Slider {...settings} className="slider">
        {nums.map((i, index) => {
          return (
            <div key={index}>
              <h3>{i.name}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Courosel;
