import { useEffect, useState } from "react";
import Clock from "../../assets/icon/Clock";
import courses from "../SinglePage.js";
import { useParams } from "react-router-dom";
import { courseDetailData } from "../../_mock/data";

const CourseDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const course = courses.find((ux) => ux.slug === id);
    setData(course);
  }, [id]);

  return (
    <section className="container my-28">
      <div className="flex text-center items-center justify-between">
        <h2 className="max-w-[750px] text-4xl font-semibold">{data?.title}</h2>
        <p className="max-w-[750px] text-lg font-normal text-start">
          {data?.text}
        </p>
      </div>
      <img className="mt-[100px]" src={data?.img} alt="image" />
      <hr />
      <div className="grid grid-cols-2 mt-24 gap-8">
        {courseDetailData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-12">
            <h2 className="text-7xl font-bold leading-6 text-end">
              {item?.numer}
            </h2>
            <h3 className="text-2xl font-semibold my-12">{item?.title}</h3>
            <div className="flex items-center justify-between border-solid border-2 rounded-lg py-6 px-8 mt-5">
              <div>
                <h4 className="text-xl font-medium">{item?.innertitle1}</h4>
                <p className="text-lg font-normal">{item?.innnertext1}</p>
              </div>
              <div className="flex items-center justify-between gap-4 bg-[#F7F7F8] rounded-lg p-4">
                <span>
                  <Clock />
                </span>
                <p className="text-lg font-normal">{item.time1}</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-solid border-2 rounded-lg py-6 px-8 mt-5">
              <div>
                <h4 className="text-xl font-medium">{item.innertitle2}</h4>
                <p className="text-ls font-normal">{item.innnertext2}</p>
              </div>
              <div className="flex items-center justify-between gap-4 bg-[#F7F7F8] rounded-lg p-4">
                <span>
                  <Clock />
                </span>
                <p className="text-lg font-normal">{item.time2}</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-solid border-2 rounded-lg py-6 px-8 mt-5">
              <div>
                <h4 className="text-xl font-medium">{item.innertitle3}</h4>
                <p className="text-ls font-normal">{item.innnertext3}</p>
              </div>
              <div className="flex items-center justify-between gap-4 bg-[#F7F7F8] rounded-lg p-4">
                <span>
                  <Clock />
                </span>
                <p className="text-lg font-normal">{item.time3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetails;
