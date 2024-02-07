import React, { useState } from "react";
import Plus from "../assets/icon/Plus";
import Minus from "../assets/icon/Minus";

function Accordion(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const AccordionFunc = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="border p-3 rounded-lg">
      <button
        onClick={AccordionFunc}
        className="border-none w-full flex justify-between items-center p-10  bg-white"
      >
        <p className="font-medium text-xl text-start">{props.h2}</p>
        <span className="flex justify-center transition ease-out delay-300 rounded-6 bg-secondary hover:bg-primary">
          {accordionOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <hr />
      <div
        className={`grid transition-all ease-out delay-300 overflow-hidden  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-0"
            : "grid-rows-[0fr] opacity-0 mt-[-40x] "
        }`}
      >
        <div onClick={AccordionFunc} className="overflow-hidden ">
          <p
            className={`font-normal text-lg transition-all ease-out  delay-300  ${accordionOpen ? "p-10 mt-16" : "p-0 mt-0"} overflow-hidden `}
          >
            {props.text1}
          </p>
        </div>
        <div
          onClick={AccordionFunc}
          className={`flex justify-between cursor-pointer items-center overflow-hidden transition-all ease-out  delay-300 ${accordionOpen ? "p-10 mt-16 " : "p-0 mt-0"}`}
        >
          <p className="font-medium text-lg p-8 bg-[#F7F7F8] rounded-lg border-2">
            {props.text2}
          </p>
          <span
            className={`fill-black transition-all ease-out  delay-300 ${accordionOpen ? "p-12" : "p-0 "}  bg-white rounded-[50%]`}
          >
            <Plus />
          </span>
        </div>
      </div>

      {}
    </div>
  );
}

export default Accordion;
