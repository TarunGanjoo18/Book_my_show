import React,{useState,useEffect} from "react";
import axios from "axios";


//Components
import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";
import Poster from "../components/Poster/poster.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config"


const HomePage = () => {
const [popularMovies, setPopularMovies] =useState([]);
const [topRatedMovies, setTopRatedMovies] =useState([]);
const [upcomingMovies, setUpcomingMovies] =useState([]);



 useEffect(()=>{
const requestPopularMovies = async () =>{
  const getPopularMovies = await axios.get("/movie/popular");
  setPopularMovies(getPopularMovies.data.results)
}
requestPopularMovies();
 },[])

 useEffect(()=>{
const requestTopRatedMovies = async () =>{
  const getTopRatedMovies = await axios.get("/movie/top_rated");
  setTopRatedMovies(getTopRatedMovies.data.results)
}
requestTopRatedMovies();
 },[])

 useEffect(()=>{
const requestUpcomingMovies = async () =>{
  const getUpcomingMovies = await axios.get("/movie/upcoming");
  setUpcomingMovies(getUpcomingMovies.data.results)
}
requestUpcomingMovies();
 },[])

  return (
    <>
     <div className ="flex flex-col gap-10">
     <div className="container mx-auto  py-4 ">
        <h1 className="text-2xl font-bold text-gray-800 pl-2 my-3 md:pl-8">
          The best of entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>


      <div style={{ backgroundColor: "#2B3148" }} className="py-16 ">
        
        <div className="container mx-auto px-4">
        <div className="hidden  items-center justify-center md:flex">
          <img src=" https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="" />
        </div>
        <PosterSlider images = {popularMovies} title="Premieres" subtitle="Brand new movies every Friday!" isDark/>
        {/* This is for the premiere part */}
        </div>
      </div>

      <div className="container mx-auto px-4">
      <PosterSlider images = {topRatedMovies} title="Online Streaming Events"  isDark={false}/>

      </div>
      <div className="container mx-auto px-4">
      <PosterSlider images = {upcomingMovies} title="Outdoor Events"  isDark={false}/>

      </div>
     </div>
    </>
  );
};
export default HomePage;


