import React from "react";

import LinkSvg from "../assets/svg/link2.svg";

const ProjectCard = (props) => {
  return (
    <div className="z-20 border rounded-2xl border-white/10  overflow-hidden pb-[3rem] h-full bg-[#0F0F11]">
      <img src={props.src} alt="project" className="objet-cover aspect-2/3" />
      <div className="flex justify-between items-end">
        <div>
          <h4 className="pl-[2rem] mt-[1.5rem] text-s18 text-grey font-semibold">
            {props.title}
          </h4>
          <p className="pl-[2rem] text-grey text-s18 mt-[1rem]">{props.info}</p>
        </div>
        <a
          target="blank"
          rel="noneferrer"
          className="cursor-pointer mr-[2rem] z-40 "
          href={props.href}
        >
          <img src={LinkSvg} alt="link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
