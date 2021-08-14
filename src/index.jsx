import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// context Provider
import MovieProvider from "./context/movie.context";

ReactDOM.render(
  <BrowserRouter>
    <MovieProvider>
      <App />
    </MovieProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
