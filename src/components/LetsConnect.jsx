import React from "react";

const LetsConnect = () => {
  return (
    <section
      id="connect"
      className="relative bg-black py-16 md:py-28 px-[2rem]"
    >
      <div className="container mx-auto">
        <div
          className="relative overflow-hidden z-20 flex flex-col items-center text-center
        bg-black px-9 py-12 md:px-14 md:py-20 rounded-xl
        Index_contact-gradient"
        >
          <h2 className="text-white text-s40 lg:text-s48 font-bold">
            Let’s skyrocket your next project together
          </h2>
          <p className="text-white text-s18 lg:text-s20 mt-6">
            Got a project you would like me to work on? Or how about just a
            friendly chat?
          </p>
          <a
            href="tel:+917889506293"
            className="z-40  mt-10 font-medium text-s16 lg:text-s18 bg-gradient-to-r p-[.4rem] from-[#0062ff]  to-[#61efff] px-[1.6rem] py-[.8rem] rounded-full hover:brightness-110 "
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="Index_contact_left absolute"></div>
      <div className="Index_contact_right absolute"></div>
    </section>
  );
};

export default LetsConnect;
