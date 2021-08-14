// import React,{useEffect, useContext} from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// import MovieNavbar from '../components/navbar/MovieNavbar.component'

// // context
// import {MovieContext}  from "../context/movie.context"

// const MovieLayout = (props) => {

//     const {id} = useParams();
// const {movie , setMovie} = useContext(MovieContext);
// useEffect(()=>{
//     const requestMovie = async () =>{
// const getMovieData = await axios.get(`/movie/${id}`);
// setMovie(getMovieData.data);
// console.log(getMovieData);
// }

// requestMovie();
// },[]);
//     return (
//         <>
               
//          <MovieNavbar/>
//         {props.children} 
//         </>
        
//     )
// }

// export default MovieLayout



import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import MovieNavbar from "../components/navbar/MovieNavbar.component";

// context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => { 
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;