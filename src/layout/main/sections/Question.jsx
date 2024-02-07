import React from "react";
import Accordion from "../../../components/Accordion";

function Question(props) {
  return (
    <section className="container mt-[120px]">
      <div className=" p-[100px] bg-white rounded-lg flex items-start justify-between">
        <div className="max-w-[408px]">
          <h2 className="text-5xl font-semibold leading-[120%]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-normal leading-[150%] mt-[10px]">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <button className="border-none text-lg font-medium leading-[150%] px-[24px] py-[18px] rounded-lg border-current bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white mt-[50px] ">
            See All FAQ’s
          </button>
        </div>

        <div className="flex flex-col gap-20">
          <Accordion
            h2="Can I enroll in multiple courses at once?"
            text1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
            text2="Enrollment Process for Different Coursese"
          />
          <Accordion
            h2="Are the courses self-paced or do they have specific start and end dates?"
            text1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
            text2="Enrollment Process for Different Coursese"
          />
          <Accordion
            h2="Are there any prerequisites for the courses?"
            text1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
            text2="Enrollment Process for Different Coursese"
          />
          <Accordion
            h2="Can I download the course materials for offline access?"
            text1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
            text2="Enrollment Process for Different Coursese"
          />
        </div>
      </div>
    </section>
  );
}

export default Question;
//  <div className="max-w-[1595px] w-full ml-[120px]">
//           <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               Can I enroll in multiple courses at once?
//             </p>
//             <Plus />
//           </div>
//           <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               What kind of support can I expect from instructors?
//             </p>
//             <Plus />
//           </div>
//           <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               Are the courses self-paced or do they have specific start and end
//               dates?
//             </p>
//             <Plus />
//           </div>
//           <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               Are there any prerequisites for the courses?
//             </p>
//             <Plus />
//           </div>
//           <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               Can I download the course materials for offline access?
//             </p>
//             <Plus />
//           </div>
//           {/* <div className="border-solid border-2 rounded-lg flex items-center justify-between px-[50px] py-[30px] text-center mb-[20px]">
//             <p className="pl-[12px] text-lg font-normal leading-[150%]">
//               Access to exclusive Pro Plan community forums.
//             </p>
//             <Plus />
//           </div> */}
//         </div>
