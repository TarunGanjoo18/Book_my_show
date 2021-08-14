import React from "react";
// here what we are doing is we are creating different div next and prev with styles onclick className and these are getting CSS from the App.jsx because it has imported the styles from react slick too I guess

export const NextArrow = (props) => {
  return (
    <>
      {/* props is returning ClassName , style , onclick */}
      <div
        className={props.className}
        style={{
          ...props.styles,
          backgroundColor: "black",
          opacity: 0.5,
          border: "1px solid black",
          height: "100px",
          width: "40px",
          borderBottomLeftRadius: "5px",
          borderTopLeftRadius: "5px",
          textAlign: "center",
          lineHeight: "115px",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
            color: "white",
          ...props.styles,
          backgroundColor: "black",
          opacity: 0.5,
          border: "1px solid black",
          height: "100px",
          width: "40px",
          borderBottomRightRadius: "5px",
          borderTopRightRadius: "5px",
          textAlign: "center",
          lineHeight: "115px",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

// here the props that react slick will pass from the settings and settingsLG in HeroCarousel file will have className , styles , onclick cause since these are the properties of html element
