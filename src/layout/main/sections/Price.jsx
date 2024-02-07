import React from "react";

import Check from "../../../assets/icon/Check";
import Cancel from "../../../assets/icon/Cancel";

function Price(props) {
  return (
    <section className="container mt-[120px]">
      <div className="flex justify-between items-end">
        <div className="w-[1177px]">
          <h2 className="text-5xl font-[600] leading-[150%] ">Our Pricing</h2>
          <p className=" text-lg font-normal  leading-[150%] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="p-[12px] bg-white rounded-lg">
          <button className="py-[15px] items-center text-center px-[34px] mr-3 text-lg font-normal rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
            Monthly
          </button>
          <button className="py-[15px] items-center text-center px-[34px] text-lg font-normal rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
            Yearly
          </button>
        </div>
      </div>

      <div className="flex items-center bg-white rounded-lg p-[80px] border-inherit border-2 mt-[80px]">
        <div className="w-full bg-[#FCFCFD] rounded-lg px-[30px] py-[50px] border-inherit	border-2 mr-[30px]">
          <p className="bg-[#FFF9F0] rounded-lg w-full text-[22px] font-[500] leading-[169%] px-[12px] py-[22px] mb-[50px] text-center  border-2 border-[#FFEACC]">
            Free Plan
          </p>
          <h3 className="text-center text-xl font-[500] leading-[73%] mb-[50px]">
            <span className="text-[80px] font-[600] leading-[73%]">$0</span>
            /month
          </h3>
          <div className="bg-white rounded-t-lg p-[40px] border-inherit border-2">
            <h4 className="text-xl font-[500] leading-[150%] text-center mb-[30px]">
              Available Features
            </h4>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Access to selected free courses.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Limited course materials and resources.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Basic community support.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                No certification upon completion.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Ad-supported platform.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Cancel />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Access to exclusive Pro Plan community forums.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Cancel />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Early access to new courses and updates.
              </p>
            </div>
          </div>
          <button className="py-[15px] w-full items-center text-center px-[34px] text-lg font-normal rounded-b-lg bg-[#FF9500] hover:bg-[#e4ac5e] text-white">
            Get Started
          </button>
        </div>

        <div className="w-full bg-[#FCFCFD] rounded-lg px-[30px] py-[50px] border-inherit	border-2">
          <p className="bg-[#FFF9F0] rounded-lg w-full text-[22px] font-[500] leading-[169%] px-[12px] py-[22px] mb-[50px] text-center  border-2 border-[#FFEACC]">
            Pro Plan
          </p>
          <h3 className="text-center text-xl font-[500] leading-[73%] mb-[50px]">
            <span className="text-[80px] font-[600] leading-[73%]">$79</span>
            /month
          </h3>
          <div className="bg-white rounded-t-lg p-[40px] border-inherit border-2">
            <h4 className="text-xl font-[500] leading-[150%] text-center mb-[30px]">
              Available Features
            </h4>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Unlimited access to all courses.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Unlimited course materials and resources.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Priority support from instructors.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Course completion certificates.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Ad-free experience.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Access to exclusive Pro Plan community forums.
              </p>
            </div>
            <div className="border-solid border-2 rounded-lg flex p-[14px] items-center text-center mb-[20px]">
              <Check />
              <p className="pl-[12px] text-lg font-normal leading-[150%]">
                Early access to new courses and updates.
              </p>
            </div>
          </div>
          <button className="py-[15px] w-full items-center text-center px-[34px] text-lg font-normal rounded-b-lg bg-[#FF9500] hover:bg-[#e4ac5e] text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Price;
