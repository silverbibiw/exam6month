import React from "react";

import Photo1 from "../../../assets/img/photo1.png";
import Photo2 from "../../../assets/img/photo2.png";
import Photo3 from "../../../assets/img/photo3.png";
import Photo4 from "../../../assets/img/photo4.png";

const testiList = [
  {
    id: "1",
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    photo: Photo1,
    name: "Sarah L",
  },
  {
    id: "2",
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    photo: Photo2,
    name: "Jason M",
  },
  {
    id: "3",
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    photo: Photo3,
    name: "Emily R",
  },
  {
    id: "4",
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    photo: Photo4,
    name: "Michael K",
  },
];

function Testimonials(props) {
  return (
    <section className="container mt-[109px]">
      <div className="flex justify-between items-end">
        <div className="w-[1177px]">
          <h2 className="text-5xl font-[600] leading-[150%] ">
            Our Testimonials
          </h2>
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

      <div className="grid grid-cols-2 gap-8 mt-[80px]">
        {testiList.map((item) => (
          <div className="bg-white rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500">
            <div className="p-[40px]">
              <p className="text-lg font-normal leading-[150%]">{item.text}</p>
            </div>
            <div className="p-[40px] bg-[#FCFCFD] flex justify-between items-center">
              <div className="flex justify-between items-center">
                <img src={item.photo} alt="photo" />
                <h3 className="text-lg font-[600] leading-[150%] mx-[15px]">
                  {item.name}
                </h3>
              </div>
              <button className="text-lg font-[500] leading-[150%] px-[24px] py-[18px] rounded-lg bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white">
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
