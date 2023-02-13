import React from "react";
import { Card } from "../Card/Card";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
  };
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
  // };

  return (
    <Slider>
      {data.map((el) => (
        <Card
          key={el.id}
          set={el.set}
          name={el.name}
          text={el.text}
          type={el.type}
          role={el.role}
          imageFront={el.imageFront}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
