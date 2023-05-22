import React from "react";
import ProjectCard from "../utilities/ProjectCard";

import SpeedoLearn from "../assets/images/SpeedoLearn.PNG";
import Dream from "../assets/images/dreamEducation.PNG";
import Crm from "../assets/images/CRM.PNG";
import Sgt from "../assets/images/sgt.PNG";

const Data = [
  {
    src: SpeedoLearn,
    title: "SpeedoLearn",
    info: "Online Learning and Teaching Platform",
    href: "https://www.speedolearn.com/",
  },
  {
    src: Dream,
    title: "Dream Education ",
    info: "Education Consultancy",
    href: "http://dreameducationservices.com/",
  },
  {
    src: Crm,
    title: "CRM",
    info: "Customer Relationship Management Software",
    href: "http://crm.sgtstocks.com/login",
  },
  {
    src: Sgt,
    title: "Sabeel General Trading ",
    info: "Online Stock Management Software",
    href: "https://sgtstocks.com/login",
  },
];

const MyPortfolio = () => {
  return (
    <section id="portfolio" className="bg-black py-16 md:py-32 px-[2rem]">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-s48 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0062ff]  to-[#61efff]">
            My Portfolio
          </h2>
        </div>
        <p className="mt-[2rem] text-grey text-s18 font-medium text-center">
          Proven track record of delivering successful software projects.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] mt-[6rem]">
          {Data.map((data, index) => (
            <ProjectCard
              key={index}
              src={data.src}
              title={data.title}
              info={data.info}
              href={data.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
