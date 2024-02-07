import React, { useState } from "react";

import Photo from "../assets/img/photo3.png";
import Prev from "../assets/icon/Prev";
import Next from "../assets/icon/Next";
import Google from "../assets/icon/Google";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [remMe, setRemMe] = useState(false);

  const RegExEmail = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const RegExPassword = /^(?=.*[A-Z0-9])(?=.*[0-9]).{8,12}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (RegExEmail.test(email) && RegExPassword.test(password)) {
      localStorage.setItem("userData", JSON.stringify({ email, password }));
      window.location.href = "course";
    } else {
      if (!RegExEmail.test(email)) {
        setEmailError("Email Error");
      }
      if (!RegExPassword.test(password)) {
        setPasswordError(
          "Password must be more than 8 characters, number and uppercase letters",
        );
      }
    }
  };

  return (
    <section className="container flex items-start justify-between my-28">
      <div className="w-[830px]">
        <h3 className="text-4xl font-medium leading-[150%]">
          Students Testimonials
        </h3>
        <p className="text-lg font-normal leading-[150%] mt-4">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="mt-[80px]">
          <p className="text-lg font-normal leading-[150%] bg-white p-12">
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          <div className="flex items-center justify-between bg-[#FCFCFD] p-12">
            <div className="flex items-center justify-start gap-4">
              <img src={Photo} alt="photo" />
              <h4 className="text-lg font-semibold leading-[150%]">Sarah L</h4>
            </div>
            <button className="py-4 px-6 items-center text-center  ml-[20px] text-lg font-medium rounded-lg bg-white hover:bg-[#FF9500] hover:text-white">
              Read More
            </button>
          </div>
          <div className="flex items-end justify-end gap-5 mt-8">
            <Prev />
            <Next />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <div className="w-[660px] bg-white p-12 rounded-lg">
            <h2 className="text-5xl font-semibold text-center mb-3">Login</h2>
            <p className="text-lg font-normal text-center mb-12">
              Welcome back! Please log in to access your account.
            </p>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-[150%] mb-4"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-6 rounded-lg border-slate-200 border-2 bg-[#FCFCFD]"
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-[150%] mb-4"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-6 rounded-lg border-slate-200 border-2 bg-[#FCFCFD]"
              />
            </div>
            {passwordError && (
              <span className="text-red-500">{passwordError}</span>
            )}
            <p className="text-lg font-normal text-end mt-4 hover:text-slate-300">
              <a href="#"> Forgot Password?</a>
            </p>
            <div className="my-6 flex items-center justify-start">
              <input
                type="checkbox"
                id="remMe"
                checked={remMe}
                onChange={(e) => setRemMe(e.target.checked)}
                className="form-checked h-5 w-5 bg-[#FCFCFD] text-orange-300 mr-2"
              />
              <label
                htmlFor="remMe"
                className="text-lg font-normal items-center"
              >
                Remember Me
              </label>
            </div>
            <button
              className="w-full text-lg font-medium py-4 px-5 rounded-lg  border-slate-200 border-2 bg-[#FCFCFD] hover:bg-[#FF9500] hover:text-white hover:border-none transition duration-300"
              type="submit"
            >
              Login
            </button>
            <div class="relative flex py-5 items-center my-8">
              <div class="flex-grow border-t border-gray-200"></div>
              <span class="text-lg font-normal mx-4 text-gray-400">OR</span>
              <div class="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="w-full p-6 rounded-lg border-slate-200 border-2 bg-[#FCFCFD] flex items-center justify-center">
              <span>
                <Google />
              </span>
              <p className="text-lg font-medium ml-4">Login with Google</p>
            </div>
            <div>
              <p className="text-lg font-medium text-center mt-8">
                Don’t have an account?
                <Link
                  to="/signup"
                  className="ml-2 underline hover:text-[#FF9500]"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
