import React from "react";

import Icon from "../assets/icon/Icon";
import Email from "../assets/icon/Email";
import Phone from "../assets/icon/Phone";
import Location from "../assets/icon/Location";

import Facebook from "../assets/icon/Facebook";
import Twitter from "../assets/icon/Twitter";
import Link from "../assets/icon/Link";

function Footer(props) {
  return (
    <footer className="mt-[100px] pt-12 md:pt-24 bg-white py-16 md:py-24 px-4 md:px-8 lg:px-24">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-start md:gap-8">
        <ul className="flex flex-col gap-4 md:w-72">
          <Icon />
          <li className="flex items-center pt-8 md:pt-16">
            <Email />
            <p className="text-lg font-normal leading-normal ml-2">
              hello@skillbridge.com
            </p>
          </li>
          <li className="flex items-center">
            <Phone />
            <p className="text-lg font-normal leading-normal ml-2">
              +91 91813 23 2309
            </p>
          </li>
          <li className="flex items-center">
            <Location />
            <p className="text-lg font-normal leading-normal ml-2">
              Somewhere in the World
            </p>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          <ul className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-normal">Home</h2>
            <li>
              <p className="text-lg font-normal leading-normal">Benefits</p>
            </li>
            <li>
              <p className="text-lg font-normal leading-normal">Our Courses</p>
            </li>
            <li>
              <p className="text-lg font-normal leading-normal">
                Our Testimonials
              </p>
            </li>
            <li>
              <p className="text-lg font-normal leading-normal">Our FAQ</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-normal">About US</h2>
            <li>
              <p className="text-lg font-normal leading-normal">Company</p>
            </li>
            <li>
              <p className="text-lg font-normal leading-normal">Achievements</p>
            </li>
            <li>
              <p className="text-lg font-normal leading-normal">Our Goals</p>
            </li>
          </ul>
          <ul>
            <h2 className="text-xl font-semibold leading-normal">
              Social Profiles
            </h2>
            <li className="flex gap-4 items-start mt-5">
              <span>
                <Facebook />
              </span>
              <span>
                <Twitter />
              </span>
              <span>
                <Link />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
