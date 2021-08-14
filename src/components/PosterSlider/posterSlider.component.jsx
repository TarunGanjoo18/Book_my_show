import React from "react";
import Slider from "react-slick";

// Component
import Poster from "../Poster/poster.component";

// Config
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  const sliderConfig = props.config ? props.config : PosterCarouselSettings;
  // this is because it will check if the config setting for the carousel is in the file if yes then it will use the file config but if not then it will use the posterCarouselSettings
  return (
    <>
      <div className="flex flex-col items-start p-3">
        <h1
          className={`text-3xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => {
          return <Poster {...image} isDark={props.isDark} />;
        })}
      </Slider>
    </>
  );
};
export default PosterSlider;
