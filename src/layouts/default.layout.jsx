import React from "react";
import Navbar from "../components/navbar/navbar.component";

//components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
    return (
         <>
         <Navbar/>
         <HeroCarousel/>
        {props.children} 
        {/* here all the data of the component will be adapted through prop and the component will be treated as a children element and will be rendered after h1 tag of defaultLayout */}
        </>
    );
}


export default DefaultLayout;