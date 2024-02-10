import { Outlet, useNavigate } from "react-router-dom";

import coursePageList from "../assets/courses";

function CoursePage() {
  const navigate = useNavigate();
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
          <div key={item.id} className="bg-white p-[50px] rounded-lg my-12">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold mt-4 leading-[150%]">
                  {item.title}
                </h2>
                <p className="text-lg font-normal mt-3 max-w-[1200px]">
                  {item.text}
                </p>
              </div>
              <button
                onClick={() => navigate(`/course/${item.slug}`)}
                className="py-4 px-6 items-center text-center  ml-[20px] text-lg font-medium rounded-lg bg-white hover:bg-[#FF9500] hover:text-white"
              >
                {/* <Link to={`/course/${item.slug}`}>View Course</Link> */}
                View Course
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
