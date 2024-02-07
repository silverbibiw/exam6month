import React from "react";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Course from "./sections/Course";
import Testimonials from "./sections/Testimonials";
import Price from "./sections/Price";
import Question from "./sections/Question";

function Main(props) {
  return (
    <div className=" flex flex-col justify-between ">
      <div className="wrapper">
        <Hero />
        <Benefits />
        <Course />
        <Testimonials />
        <Price />
        <Question />
      </div>
    </div>
  );
}

export default Main;
