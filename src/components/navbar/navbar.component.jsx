import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const NavSm = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <h3 style={{ color: "white" }} className="text-xl font-bold">
            It All Starts Here!
          </h3>
          <span className="text-gray-300 text-sm flex items-center ">
            Pune <BiChevronRight />{" "}
          </span>
        </div>
        <div className="text-white w-7 h-7">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <>
      <div className="flex items-center m-2 bg-white gap-3 px-3 py-2 rounded ml-3 w-full">
        <BiSearch className="w-7 h-5" />
        <input
          className="w-full bg-transparent border-none focus:outline-none"
          type="search"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-2 flex items-center justify-around ">
        <div className="flex item-center p-1 w-1/2 px-10">
          <div className="w-12 h-12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="Logo"
            />
          </div>
          <div className="flex items-center m-2 bg-white gap-3 px-3 py-1 rounded ml-3 w-full">
            <BiSearch className="w-7 h-5" />
            <input
              className="w-full bg-transparent border-none focus:outline-none"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>

          <div className="flex items-center">
            <span className="mx-5 text-gray-300 text-sm flex items-center hover:text-white duration-300  cursor-pointer ">
              Pune <BsFillCaretDownFill />
            </span>
            <button
              className="mx-2 text-center text-white w-18 px-2 py-1 text-sm whitespace-nowrap rounded"
              style={{ backgroundColor: "#F84464" }}
            >
              Sign in
            </button>
            <div className="mx-3 text-white w-8 h-8 cursor-pointer">
              <FiMenu className=" w-full h-full" />
            </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#333545" }}>
        <div className="md:hidden p-3">
          {/* Mobile Screen */}
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          {/* Tab/Medium Screen */}
          <NavMd />
        </div>

        <div className="hidden lg:flex">
          {/* Laptop/Desktop Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
