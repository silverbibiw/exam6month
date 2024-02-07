import React from "react";
import Lighting from "../../../assets/icon/Lighting";
import Zapier from "../../../assets/icon/Zapier";
import Spotify from "../../../assets/icon/Spotify";
import Zoom from "../../../assets/icon/Zoom";
import Amazon from "../../../assets/icon/Amazon";
import Abode from "../../../assets/icon/Abode";
import Notion from "../../../assets/icon/Notion";
import Netflix from "../../../assets/icon/Netflix";
import Container from "../../../assets/img/mainimage.png";

function Hero(props) {
  return (
    <section className="container mt-[100px]">
      <div className="text-center items-center justify-center ">
        <div className="flex justify-between items-center rounded-lg w-[800px] m-auto bg-white px-8 py-4">
          <span>
            <Lighting />
          </span>
          <h1 className="text-5xl font-[600] font-['Be Vietnam Pro']">
            <span className="title-word title-word-1 text-[#FF9500]">
              Unlock
            </span>
            <span className="title-word title-word-2"> Your </span>
            <span className="title-word title-word-3">Creative </span>
            <span className="title-word title-word-4">Potential</span>
          </h1>
        </div>
        <h3 className="text-4xl font-[500] pt-3">
          with Online Design and Development Courses.
        </h3>
        <p className="text-ls font-[400] pt-3">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="pt-[60px]">
          <button className="fill py-[15px] items-center text-center px-[34px] ml-[20px] text-lg font-normal rounded-lg bg-none hover:bg-[#FF9500] hover:text-white">
            Explore Courses
          </button>
          <button className="fill py-[15px] items-center text-center px-[34px] ml-[20px] text-lg font-normal rounded-lg bg-none hover:bg-[#FF9500] hover:text-white">
            View Pricing
          </button>
        </div>
        <div className="flex justify-center items-center rounded-lg bg-white mt-[100px] p-[30px] ">
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Zapier />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Spotify />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Zoom />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Amazon />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Abode />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Notion />
          </span>
          <span className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 border-r-2 border-slate-100">
            <Netflix />
          </span>
        </div>
        <div className="my-[100px]">
          <img src={Container} alt="ddwef" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
