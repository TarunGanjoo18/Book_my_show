import React,{useContext , useState , useEffect} from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { FaCcApplePay, FaCcMastercard } from "react-icons/fa";
import axios from "axios";
import Slider  from "react-slick";

// context
import { MovieContext } from "../context/movie.context";


// component
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config"
import { useParams } from "react-router";

const Movie = () => {

  const { id } = useParams();
  const  {movie} = useContext(MovieContext);
  const [cast , setCast ] =useState([]);
  const [similarMovies , setSimilarMovies] = useState([]);
  const [recommended , setRecommended] = useState([]);

  useEffect(()=>{
    const requestCast = async () =>{
      const getCast = await axios.get(`/movie/${id}/credits`)
      setCast(getCast.data.cast)
    }
    requestCast();

  },[id])

  
 useEffect(()=>{
  const requestSimilarMovies = async () =>{
    const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
    setSimilarMovies(getSimilarMovies.data.results)
  }
  requestSimilarMovies();
   },[id])

   useEffect(()=>{
    const requestRecommendedMovies = async () =>{
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommendedMovies.data.results)
    }
    requestRecommendedMovies();
     },[id])
      


  const movieSettings={
  
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
  const SettingsCast={
  
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
   
  
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4  lg:w-2/3 lg:ml-96 lg:pl-1">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            {movie.overview}
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h1 className="text-gray-800 font-bold text-2xl mb-3">
            Available offers
          </h1>

          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              className="flex items-start gap-2 p-3 border-4 border-yellow-400 border-dashed"
              style={{ backgroundColor: "#FFF3D2" }}
            >
              <div className="w-8 h-8">
                {" "}
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  ApplePay Steam offer
                </h3>
                <p className="text-gray-500 ">
                  Get 50% off up to INR 150 on all ApplePay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>{" "}
            <div
              className="flex items-start gap-2 p-3 border-4 border-yellow-400 border-dashed"
              style={{ backgroundColor: "#FFF3D2" }}
            >
              <div className="w-8 h-8">
                {" "}
                <FaCcMastercard className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Mastercard Steam offer
                </h3>
                <p className="text-gray-500 ">
                  Get 60% off up to INR 250 on all Master cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>

          {/* <div className="flex flex-wrap gap-5"> */}
            <Slider {...SettingsCast}>
            {cast.map((castdata) => (
            
            <Cast
              image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
              castName={castdata.original_name }
              role={castdata.character}
            />
                )    )}

            </Slider>
          {/* </div> */}
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
        <PosterSlider config={movieSettings} images = {similarMovies} title="You might also like"  isDark={false}/>
        {/* here we are not using the default carousel settings we are using the setting that are in movieSettings in this file */}
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
        <PosterSlider config={movieSettings} images = {recommended} title="BMS XCLUSIVE"  isDark={false}/>
        {/* here we are not using the default carousel settings we are using the setting that are in movieSettings in this file */}
        </div>
      </div>
    </>
  );
};

export default Movie;
