import React, { useState } from "react";
import Skillslist from "./SkillsList";
import VisibilitySensor from "react-visibility-sensor";
const Skills = ({ Checked }) => {
  const [Visible, setVisible] = useState(false);

  function handleChange(isVisible) {
    console.log(isVisible);
    if (isVisible) setVisible(true);
  }
  const style = {
    wrapper: `text-white bg-bgDark py-4 ${
      Visible && "animate__animated animate__backInUp"
    }`,
    skillInfoContainer: `flex items-center justify-center  `,
    number: "text-7xl md:text-8xl lg:text-9xl text-cyan font-bold m-2 md:m-4",
    infoNameContainer: "",
    skillsInfoPara:
      "hidden md:block text-white text-lg w-[90%] md:w-[64%] lg:w-[55%] mx-auto text-center ",
  };
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility
      minTopValue={100}
    >
      <div className="bg-bgDark">
        <div className={style.wrapper}>
          {/* adding the top info of the skills page */}
          <section className={style.skillInfoContainer}>
            <h2 className={style.number}>01</h2>
            <section className={style.infoNameContainer}>
              <p className="text-lg md:text-2xl my-2">
                {Checked ? "  Aprendendo infinitamente " : "endlessly learning"}
              </p>
              <p className="font-bold text-yellow text-4xl md:text-5xl lg:text-6xl">
                {Checked ? " Minhas Skills" : "My Skills"}
              </p>
            </section>
          </section>
          {/* adding the info para of skills page */}
          <p className={style.skillsInfoPara}>
            {Checked ? "  Abaixo segue a" : "Below is a"}
            <span className="font-bold text-pink mx-1">
              {Checked
                ? "  relação das tecnologias "
                : "list of the technologies"}
            </span>
            {Checked
              ? "    que tenho experiência. Se quiser conhecer mais profundamente sobre as minhas habilidades, "
              : "I have experience with. If you want to know more deeply about my skills,"}
            <span className="font-bold text-parrot mx-1">
              {Checked
                ? "  clique em cada tecnologia "
                : "click on each technology"}
            </span>
            {Checked ? "  para mais detalhes. " : " for more details."}
          </p>

          <Skillslist />
        </div>{" "}
      </div>
    </VisibilitySensor>
  );
};

export default Skills;
