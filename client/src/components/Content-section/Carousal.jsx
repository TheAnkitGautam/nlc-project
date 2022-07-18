import CSS from "./content.module.css";
import "./arrow.css";
import Card from "./Card";
import Slider from "react-slick";
import { Fade } from "react-reveal";

const Carousal = ({ title }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "react__slick__slider__parent",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Fade right delay={100} duration={1000}>
      <div className={CSS.carousal}>
        <h3 className={CSS.carousal_title}>{title}</h3>
        <div className={CSS.carousal_cards}>
          <Slider {...settings}>
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </Fade>
  );
};

export default Carousal;
