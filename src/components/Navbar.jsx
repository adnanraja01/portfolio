import React from "react";

const Navbar = () => {
  const handleHome = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleExpertise = () => {
    const element = document.getElementById("expertise");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleConnect = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" z-50 fixed top-0 left-0 right-0 w-full bg-black border-b-[.1rem] border-[#9CA3AF] p-[1.5rem] font-medium flex items-center justify-between ">
      <div
        onClick={handleHome}
        className="flex items-center gap-[2rem] ml-[1rem] sm:ml-[2rem] lg:ml-[3rem] cursor-pointer"
      >
        <div className="rounded-full  bg-gradient-to-r p-[.4rem] from-[#0062ff]  to-[#61efff]">
          <h5 className="bg-black text-white rounded-full text-s20  lg:text-s26 p-[.6rem]">
            AR
          </h5>
        </div>
        <h3 className="text-s20 lg:text-s24 text-white font-semibold ">
          Raja Adnaan Altaf
        </h3>
      </div>
      <div className="hidden lg:flex items-center mr-[2.5rem]">
        <ul className="text-[#9CA3AF]  text-s18 flex justify-between gap-[4.2rem] mr-[3rem]">
          <li onClick={handleHome} className="cursor-pointer">
            Home
          </li>
          <li onClick={handleAbout} className="cursor-pointer">
            About
          </li>
          <li onClick={handleExpertise} className="cursor-pointer">
            My Expertise
          </li>
          <li onClick={handlePortfolio} className="cursor-pointer">
            My Portfolio
          </li>
        </ul>
        <button
          onClick={handleConnect}
          className="text-s18 bg-gradient-to-r p-[.4rem] from-[#0062ff]  to-[#61efff] px-[1.6rem] py-[.8rem] rounded-full hover:brightness-110 "
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
