import RightIcon from "../assets/icon/RightIcon";
import Icon from "../assets/icon/Icon";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const tokenData = localStorage.getItem("token");
  const userDataStorage = localStorage.getItem("userData");
  const userData = JSON.parse(userDataStorage);
  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    if (!tokenData) navigate("/login");
  }, [tokenData, navigate]);
  return (
    <header className="container">
      <div className=" sticky flex justify-center items-center text-center rounded bg-[#FF9500] py-[14px]">
        <p className="text-white text-lg font-normal">
          Free Courses Sale Ends Soon, Get It Now
        </p>
        <span className="pl-5">
          <RightIcon />
        </span>
      </div>

      <div className="container border-b-2 border-slate-100">
        <div className="flex text-center items-center justify-between mx-[120px]">
          <nav className="rounded-xl flex items-center">
            <span>
              <Icon />
            </span>
            <div className="hidden sm:block">
              <ul className="flex items-center justify-between rounded-lg px-9 ">
                <li className="top-text items-center text-center ml-[20px] text-lg font-normal">
                  <span>
                    <NavLink to="/">Home</NavLink>
                  </span>
                </li>
                <li className="top-text items-center text-center ml-[20px] text-lg font-normal">
                  <span>
                    <NavLink to="course">Courses</NavLink>
                  </span>
                </li>
                <li className="top-text items-center text-center ml-[20px] text-lg font-normal">
                  <span>
                    <NavLink to="about">About Us</NavLink>
                  </span>
                </li>
                <li className="top-text items-center text-center ml-[20px] text-lg font-normal">
                  <span>
                    <NavLink to="pricing">Pricing</NavLink>
                  </span>
                </li>
                <li className="top-textitems-center text-center ml-[20px] text-lg font-normal">
                  <span>
                    <NavLink to="contact">Contact</NavLink>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            {!tokenData ? (
              <>
                <button className="items-center text-center ml-[20px] text-lg font-normal border-none">
                  <NavLink to="signup">Sign In</NavLink>
                </button>
                <button className="items-center text-center ml-[20px] text-lg font-normal border-none">
                  <NavLink to="login">Login</NavLink>
                </button>
              </>
            ) : (
              <div className="flex items-center">
                <h1>{userData?.email ?? "UserName"}</h1>
                <button
                  className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={logOut}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
