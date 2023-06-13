import React, { useState } from "react";
import Project1 from "./Project1";
import VisibilitySensor from "react-visibility-sensor";

import Project2 from "./Project2";
import Project3 from "./Project3";
import Image from "next/image";
const Projects = ({ Checked }) => {
  const [Visible, setVisible] = useState(false);

  function handleChange(isVisible) {
    console.log(isVisible);
    if (isVisible) setVisible(true);
  }
  const style = {
    wrapper: `text-white bg-bgLight w-[90%] md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center mx-auto py-2  ${
      Visible && "animate__animated animate__backInUp"
    }`,
    projectInfoContainer: "flex items-center justify-center",
    number: "text-7xl md:text-8xl lg:text-9xl text-purple font-bold m-0 md:m-4",
    infoNameContainer: "",
    projectInfoPara:
      "text-white text-xs md:text-lg mx-auto text-center md:w-[80%] my-4 md:my-2",
    mobHeading: "flex items-center justify-center md:hidden",
    mobPara: "text-green font-bold m-4",
  };
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility
      minTopValue={100}
    >
      <div className="bg-bgLight">
        <div className={style.wrapper}>
          <section className={style.projectInfoContainer}>
            <section className={style.infoNameContainer}>
              <p className="text-lg md:text-2xl my-2 text-center md:text-right">
                {" "}
                {Checked ? "   Onde eu trabalhei?" : " Where did I work?"}
              </p>
              <p className="font-bold text-yellow text-3xl md:text-5xl lg:text-6xl">
                {Checked ? "   Últimos Projetos " : " Latest Projects"}
              </p>
            </section>
            <h2 className={style.number}>02</h2>
          </section>
          {/* adding the below line */}
          <p className={style.projectInfoPara}>
            {Checked ? " Confira meus projetos " : "Check out my "}
            <span className="font-bold text-pink"> TOP 3 </span>{" "}
            {Checked
              ? " que euparticipei nos últimos tempos. Cada startup com seus sonhos,objetivos, squads malucas e "
              : "projects that I've been part of lately. Each startup with their dreams, goals, crazy squads and "}
            <span className="font-bold text-parrot">
              {Checked
                ? "   desafios tecnológicos  "
                : " technological challenges "}
            </span>{" "}
            {Checked ? " para mais detalhes. " : " for more details. "}
          </p>
          <section className={style.mobHeading}>
            <Image src={"/icons/click.png"} height={30} width={30} />
            <p className={style.mobPara}>
              {Checked
                ? "  Abra os projetos para detalhes  "
                : "Open projects for details "}
            </p>
          </section>
          <section className="hidden md:flex flex-col">
            <Project1 />
            <Project2 />
            <Project3 />
          </section>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Projects;
