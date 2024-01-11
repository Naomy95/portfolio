import React from "react";
import SkillButton from "../common/SkillButton";

const Midsection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-background py-10 px-8 lg:py-20 lg:px-20">
      <div className="px-5">
        <p className="text-brown font-sans font-semibold text-2xl lg:text-4xl  text-start ">
          About Myself
        </p>
        <p className="text-brown pt-10 text-justify font-sans font-normal text-xs lg:text-base  leading-10">
          I am a Full-Stack Web Developer with proficiency in both Frontend and
          Backend development. My primary goal is to enhance websites and web
          applications to provide a seamless user experience. Besides coding, I
          am passionate about sharing my extensive web development knowledge on <a style={{textDecoration:'underline'}} href="https://www.linkedin.com/in/noor-e-zannat-naomy-525188176/">LinkedIn</a>. Connect with me to stay updated on valuable insights.
        
        </p>
      </div>

      <div className="lg:px-5">
        <p className="text-brown mb-10 font-sans font-semibold text-2xl lg:text-4xl text-start  leading-10">
          My skills
        </p>

        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-4">
          <SkillButton skills="HTML" />
          <SkillButton skills="CSS3" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
          <SkillButton skills="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Midsection;
