import { h } from "preact";
import Slider from "react-slick";
import Carousel from "nuka-carousel";

import About from "./style";

export default () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <About title="About Me">
      <h1 className="title has-text-weight-light is-size-1">About Me</h1>
      <Slider {...settings}>
        <div>
          <h1 className="title">I'm Eamon Mikulec a frontend web developer</h1>
        </div>
        <div>
          <h1 className="title has-text-weight-light is-size-1">
            Eamon Mikulec
          </h1>
          <h2 className="subtitle">Frontend web developer</h2>
        </div>
      </Slider>
    </About>
  );
};
