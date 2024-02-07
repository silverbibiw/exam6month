import React from "react";

import Web1 from "../assets/img/web1.png";
import Web2 from "../assets/img/web2.png";
import Web3 from "../assets/img/web3.png";

import Ux1 from "@imgs/ux1.png";
import Ux2 from "@imgs/ux2.png";
import Ux3 from "../assets/img/ux3.png";

import Mobile1 from "../assets/img/mobile1.png";
import Mobile2 from "../assets/img/mobile2.png";
import Mobile3 from "../assets/img/mobile3.png";

import Graphic1 from "../assets/img/graphic1.png";
import Graphic2 from "../assets/img/graphic2.png";
import Graphic3 from "../assets/img/graphic3.png";

import Front1 from "../assets/img/front1.png";
import Front2 from "../assets/img/front2.png";
import Front3 from "../assets/img/front3.png";
import { Link, Outlet } from "react-router-dom";

import coursePageList from "../assets/courses";

// const coursePageList = [
//   {
//     id: "1",
//     title: "Web Design Fundamentalss",
//     text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
//     img1: Web1,
//     img2: Web2,
//     img3: Web3,
//     button1: "4 Weeks",
//     button2: "Advance",
//     name: "By John Smith",
//     t1: "Introduction to HTML",
//     t2: "Styling with CSS",
//     t3: "Introduction to Responsive Design",
//     t4: "Design Principles for Web",
//     t5: "Building a Basic Website",
//   },
//   {
//     id: "2",
//     title: "UI/UX Design",
//     slug: "ux",
//     text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
//     img1: Ux1,
//     img2: Ux2,
//     img3: Ux3,
//     button1: "6 Weeks",
//     button2: "Intermediate",
//     name: "By Emily Johnson",
//     t1: "Introduction to UI/UX Design",
//     t2: "User Research and Personas",
//     t3: "Wireframing and Prototyping",
//     t4: "Visual Design and Branding",
//     t5: "Usability Testing and Iteration",
//   },
//   {
//     id: "3",
//     title: "Mobile App Development",
//     text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
//     img1: Mobile1,
//     img2: Mobile2,
//     img3: Mobile3,
//     button1: "8 Weeks",
//     button2: "Advance",
//     name: "By David Brown",
//     t1: "Introduction to Mobile App Development",
//     t2: "Fundamentals of Swift Programming (iOS)",
//     t3: "Fundamentals of Kotlin Programming (Android)",
//     t4: "Building User Interfaces",
//     t5: "App Deployment and Testing",
//   },
//   {
//     id: "4",
//     title: "Graphic Design for Beginners",
//     text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
//     img1: Graphic1,
//     img2: Graphic2,
//     img3: Graphic3,
//     button1: "10 Weeks",
//     button2: "Beginner",
//     name: "By Sarah Thompson",
//     t1: "Introduction to Graphic Design",
//     t2: "Typography and Color Theory",
//     t3: "Layout Design and Composition",
//     t4: "Image Editing and Manipulation",
//     t5: "Designing for Print and Digital Media",
//   },
//   {
//     id: "5",
//     title: "Front-End Web Development",
//     text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
//     img1: Front1,
//     img2: Front2,
//     img3: Front3,
//     button1: "10 Weeks",
//     button2: "Intermediate",
//     name: "By Michael Adams",
//     t1: "HTML Fundamentals",
//     t2: "CSS Styling and Layouts",
//     t3: "JavaScript Basics",
//     t4: "Building Responsive Websites",
//     t5: "Introduction to Bootstrap and React",
//   },
// ];

function CoursePage(props) {
  return (
    <section className="container mt-[109px]">
      <div className="flex justify-between items-end">
        <div className="w-[1177px]">
          <h1 className="text-5xl font-[600] leading-[150%] ">
            Online Courses on Design and Development
          </h1>
          <p className=" text-lg font-normal  leading-[150%] mt-[10px]">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
        <button className="py-[15px] items-center text-center px-[34px] ml-[20px] text-lg font-normal rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
          View All
        </button>
      </div>
      <div className="mt-[80px]">
        {coursePageList.map((item) => (
          <div className="bg-white p-[50px] rounded-lg my-12">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold mt-4 leading-[150%]">
                  {item.title}
                </h2>
                <p className="text-lg font-normal mt-3 max-w-[1200px]">
                  {item.text}
                </p>
              </div>
              <button className="py-4 px-6 items-center text-center  ml-[20px] text-lg font-medium rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
                <Link to={item.slug}> View Course</Link>
              </button>
            </div>
            <div className="flex justify-between items-center gap-5 mt-8">
              <img className="w-[450px]" src={item.img1} alt="img" />
              <img className="w-[450px]" src={item.img2} alt="img" />
              <img className="w-[450px]" src={item.img3} alt="img" />
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <div className="flex justify-between items-center">
                <p className="border-solid border-2 rounded-lg px-[16px] py-[10px] font-normal text-lg mr-[10px]">
                  {item.button1}
                </p>
                <p className="border-solid border-2 rounded-lg px-[16px] py-[10px] font-normal text-lg ">
                  {item.button2}
                </p>
              </div>
              <h3 className="font-bold text-xl leading-[150%]">{item.name}</h3>
            </div>
            <div className="mt-[80px]">
              <h3 className="text-2xl font-semibold">Curriculum</h3>
              <div className="flex items-start justify-between">
                <div className="mt-6 text-start">
                  <h4 className="text-5xl font-extrabold">01</h4>
                  <p className="text-lg font-normal mt-5 max-w-48">{item.t1}</p>
                </div>
                <div className="mt-6 text-start">
                  <h4 className="text-5xl font-extrabold">02</h4>
                  <p className="text-lg font-normal mt-5 max-w-48">{item.t2}</p>
                </div>
                <div className="mt-6 text-start">
                  <h4 className="text-5xl font-extrabold">03</h4>
                  <p className="text-lg font-normal mt-5 max-w-48">{item.t3}</p>
                </div>
                <div className="mt-6 text-start">
                  <h4 className="text-5xl font-extrabold">04</h4>
                  <p className="text-lg font-normal mt-5 max-w-48">{item.t4}</p>
                </div>
                <div className="mt-6 text-start">
                  <h4 className="text-5xl font-extrabold">05</h4>
                  <p className="text-lg font-normal mt-5 max-w-48">{item.t5}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default CoursePage;
