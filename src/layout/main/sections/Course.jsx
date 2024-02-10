import Img1 from "../../../assets/img/image1.png";
import Img2 from "../../../assets/img/image2.png";
import Img3 from "../../../assets/img/image3.png";
import Img4 from "../../../assets/img/image4.png";
import Img5 from "../../../assets/img/image5.png";
import Img6 from "../../../assets/img/image6.png";

const courseList = [
  {
    id: "1",
    img: Img1,
    button1: "4 Weeks",
    button2: "Advance",
    name: "By John Smith",
    title: "Web Design Fundamentalss",
    text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    id: "2",
    img: Img2,
    button1: "6 Weeks",
    button2: "Intermediate",
    name: "By Emily Johnson",
    title: "UI/UX Design",
    text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    id: "3",
    img: Img3,
    button1: "8 Weeks",
    button2: "AdIntermediatevance",
    name: "By David Brown",
    title: "Mobile App Development",
    text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    id: "4",
    img: Img4,
    button1: "10 Weeks",
    button2: "Beginner",
    name: "By Sarah Thompson",
    title: "Graphic Design for Beginners",
    text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  },
  {
    id: "5",
    img: Img5,
    button1: "10 Weeks",
    button2: "Intermediate",
    name: "By Michael Adams",
    title: "Front-End Web Development",
    text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
  {
    id: "6",
    img: Img6,
    button1: "6 Weeks",
    button2: "Advance",
    name: "By Jennifer Wilson",
    title: "Advanced JavaScript",
    text: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
  },
];

function Course() {
  return (
    <section className="container mt-[109px]">
      <div className="flex justify-between items-end">
        <div className="w-[1177px]">
          <h2 className="text-5xl font-[600] leading-[150%] ">Our Courses</h2>
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
        {courseList.map((item) => (
          <div
            key={item.id}
            className="bg-white p-[50px] rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500"
          >
            <img className="w-full" src={item.img} alt="img" />
            <div className="flex justify-between items-center mt-[30px]">
              <div className="flex justify-between items-center">
                <p className="border-solid border-2 rounded px-[16px] py-[10px] font-normal text-lg mr-[10px]">
                  {item.button1}
                </p>
                <p className="border-solid border-2 rounded px-[16px] py-[10px] font-normal text-lg ">
                  {item.button2}
                </p>
              </div>
              <h3 className="font-[700] text-xl leading-[150%]">{item.name}</h3>
            </div>
            <h2 className="text-2xl font-[700] mt-[30px] leading-[150%]">
              {item.title}
            </h2>
            <p className="text-lg font-normal leading-[150%] mt-[14px]">
              {item.text}
            </p>
            <button className=" w-full items-center text-center text-lg font-[500] rounded-lg bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white py-[18px] px-[24px] mt-[30px]">
              Get it Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Course;
