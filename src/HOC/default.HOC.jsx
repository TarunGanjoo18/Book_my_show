import React from "react";
// Route
import { Route } from "react-router-dom";
// Layout
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          return (
            <DefaultLayout>
              <Component {...props} />
            </DefaultLayout>
          );
        }}
      />
    </>
  );
};

// our component should have a capital  letter as per React so we are declaring component to Component that will contain all the data
//  we could also have written in this fashion : const Component = component ;  or component : Component, both are same thing
//   we can't capitalize normal component because that is a parameter so that is why we are declaring it to Component

// here we are spreading everything ( path , exact ) inside the "rest" (i.e. the value we are getting from the app.js .. Route Parameter ) but we are explicitly leaving the component for destructing because we will be updating it

// here what we are doing is  we are assigning the layout to the component..... we are calling the defaultLayout that will not get rendered again and again but the component inside it will get rendered upon the different route and props ...we are assigning the whole defaultLayout and component inside route function that will be responsible for rendering the content on different pages and in the end we are returning the whole route function

//  but right now the defaultLayout doesn't know which component to render so for that we have to make the component as a child of parent element defaultLayout this change will be reflected inside defaultLayout

//  <> </> are known as empty react fragments...it will be removed while rendering but will be there will compiling as a parent element

export default DefaultHOC;

// we all know that HOC takes a component and returns a new component
