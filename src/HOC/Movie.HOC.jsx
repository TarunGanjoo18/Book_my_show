import React, { Component } from "react";
// Route
import { Route } from "react-router-dom";
// Layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHoc = ({component: Component, ...rest} ) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          return (
            <MovieLayout>
              <Component {...props} />
            </MovieLayout>
          );
        }}
      />
    </>
  );
};

export default MovieHoc;
