import React from "react";
import NextIcon from "../../../assets/icon/NextIcon";

const cardList = [
  {
    id: "1",
    number: "01",
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: "2",
    number: "02",
    title: "Expert Instruction",
    text: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: "3",
    number: "03",
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: "4",
    number: "04",
    title: "Diverse Course Offerings",
    text: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: "5",
    number: "05",
    title: "Practical Projects and Assignments",
    text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    id: "6",
    number: "06",
    title: "Interactive Learning Environment",
    text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

function Benefits(props) {
  return (
    <section className="container">
      <div className="flex justify-between items-end">
        <div className="w-[1177px]">
          <h2 className="text-5xl font-[600] leading-[150%] ">Benefits</h2>
          <p className=" text-lg font-normal  leading-[150%] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          <button className="py-[15px] items-center text-center px-[34px] ml-[20px] text-lg font-normal rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-[80px]">
        {cardList?.map((item) => (
          <div className="p-[40px] rounded-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-300">
            <h2 className="text-end text-[50px] font-[700] leading-[24px]">
              {item.number}
            </h2>
            <h3 className="mt-[50px] text-2xl font-[600] leading-[150%]">
              {item.title}
            </h3>
            <p className="mt-[14px] text-lg font-normal ">{item.text}</p>
            <div className="m-auto">
              <span className="mt-[50px] flex justify-end">
                <NextIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
