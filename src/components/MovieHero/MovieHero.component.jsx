import React, {useContext} from "react";
import MovieInfo from "./movieInfo.component";

// context
import { MovieContext } from "../../context/movie.context";


const MovieHero = () => {

const {movie }=useContext(MovieContext)

  return (
    <>
      <div>
        {/* Mobile */}
        <div className=" relative md:hidden w-full" style={{ height: "100vh" }}>
          <div className="absolute z-20  bottom-4 left-4">
            {" "}
            <MovieInfo />
          </div>
          <div className="absolute bottom-0 bg-black z-10 w-full h-56 bg-opacity-50" />
          <img
            src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt=""
            className="w-full h-full"
          />
        </div>

        {/* Tablet */}
        <div
          className="relative hidden w-full md:block lg:hidden"
          style={{ height: "100vh" }}
        >
          <div className="absolute z-20 bottom-2 ">
            
            <MovieInfo />
          </div>

          <div className="absolute bottom-0 bg-black z-10 w-full h-56 bg-opacity-50" />

          <img
            src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* Pc */}
        <div className="relative hidden lg:block" style={{ height: "30rem" }}>
          <div
            className="absolute z-10  h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
          <div className="absolute z-30 left-96 top-10 flex items-center gap-10">
            <div className="w-64 h-96 rounded  ">
              <img
            src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="w-full h-full rounded-lg"
                alt=""
              />
            </div>
            <div className="">
              <MovieInfo />
            </div>
          </div>
          <img
            src= {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
