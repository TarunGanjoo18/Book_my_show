import React, {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// component
import { NextArrow, PrevArrow } from "./arrow.component";
// now we have to add these two inside our settings to get effects

const HeroCarousel = () => {

const [images, setImages] =useState([]);

useEffect(()=>{
//async

const reqNowPlayingMovies = async ()=>{
  const getImages = await axios.get("/movie/now_playing");
  // console.log(getImages);
  setImages(getImages.data.results);
};
reqNowPlayingMovies();
// race condition
},[])

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    Infinity: true,
    centerPadding: "450px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // we created our own arrows because we want to give our own css to the arrows that we created
  };

  const settings = {
    arrows: true,
    autoplay: true,
    Infinity: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // const images = [
  //   "https://cdn.pixabay.com/photo/2020/01/21/20/44/mountains-4783955__340.jpg",
  //   "https://cdn.pixabay.com/photo/2021/06/07/22/51/weevil-6319220__340.jpg",
  //   "https://cdn.pixabay.com/photo/2021/01/28/21/12/wave-5959087__340.jpg",
  //   "https://cdn.pixabay.com/photo/2020/02/17/17/05/underpass-4857060__340.jpg",
  //   "https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149__340.jpg",
  // ];
  return (
    <>
      <div className="lg:hidden ">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full  h-60 px-2 py-3 md:h-80 py-3">
                <img
                  className="rounded-md w-full h-full"
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="testing"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>

      <div className=" hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => {
            return (
              <div className="w-10 h-96 px-3 py-3">
                <img
                  className=" w-full h-full rounded-md"
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                   alt="testing"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
