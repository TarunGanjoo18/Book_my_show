import React from "react";
import axios from "axios";
// ROUTE
import { Route } from "react-router-dom";
// HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "../src/HOC/Movie.HOC";


// CSS files required for slick (this will be a global css file for all the react slick used)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from "./pages/home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// AXIOS default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] =process.env.REACT_APP_API_KEY;
 

function App() {
  return ( 

<>
<DefaultHOC  path="/" exact component={HomePage}  />
<MovieHOC  path="/movie/:id" exact component={MoviePage}  />
<DefaultHOC  path="/plays/:id" exact component={Plays}  />
{/* here Id is params */}

</>

    // <>
    //   <Route path ="/" exact component={name}/>
    //   <Route path ="/name1" exact component={name1}/>
    //   {/* this specifies the route and in component we have to pass the data and inside the path we have to mention the route and exact is used to exactly load a particular component for a particular route */}
    // </>
  );
}

export default App;
