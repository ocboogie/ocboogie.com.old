import { h } from "preact";
import Slider from "react-slick";

import Section from "../Section";

export default ({ title, children, className, id }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Section className={className} id={id}>
      <h1 className="title has-text-weight-light is-size-1">{title}</h1>
      <Slider {...settings}>{children}</Slider>
    </Section>
  );
};
