import React from "react";
import Image from "next/image";
const Project2 = ({Checked}) => {
  const style = {
    wrapper:
      "flex flex-col md:flex-row mx-auto justify-between bg-bgProject my-7 shadow text-white w-[90%] md:w-auto mx-auto",
    projectInfoContainer: "p-6 md:pt-12 md:px-12 text-sm lg:text-sm ",
    heading1: "font-bold text-2xl md:text-3xl my-1",
    heading2: "text-pink text-xl md:text-2xl my-2",
    heading3: "text-cyan text-lg md:text-xl my-2",
    para: "",
    techContainer:
      "flex items-center flex-wrap items-center justify-center md:justify-start",
    img: "mr-4 w-24 h-18",
    img2: "mr-4 w-36 h-18",
    img1: "mr-4 w-20 md:w-16 h-12",
  };
  return (
    <div className={style.wrapper}>
      <Image src={"/project/p3.png"} height={400} width={400} />
      {/* adding the content of the project */}
      <div className={style.projectInfoContainer}>
        <h2 className={style.heading1}>
          {Checked ? " Projeto " : " Project "}

          <span className="text-yellow font-bold mx-1">Gig Pro</span>
        </h2>
        <p className={style.para}>
          {Checked
            ? "  Um aplicativa web irado desenvolvido para fazer gestão de eventos ebooking de artistas em parceria com ROCK IN RIO. Nunca fiz nada igual.Principalmente a interface é diferenciada do trivial, muito parecidacom o Trello.  "
            : " A cool web application developed to manage events and book artists in partnership with ROCK IN RIO. I've never done anything like it. Mainly the interface is differentiated from the trivial, much like Trello. "}
        </p>
        {Checked ? " Principais desafios " : " Main challenges"}
        <p className={style.para}>
          <span className="text-parrot font-bold mx-1">
            {Checked ? " Como designer:  " : " As a designer: "}
          </span>
          {Checked
            ? "     Criar no Figma, mais de 10 telas para todos os módulos existentes "
            : " Create more than 10 screens in Figma for all existing modules within GIG PRO.  "}
          <span className="text-parrot font-bold mx-1">
            Como designer: {Checked ? "  " : "  "}
          </span>
          dentro do GIG PRO.
          <span className="text-parrot font-bold mx-1">
            {Checked ? "  Como Front-End:  " : " As a Front-End: "}
          </span>
          {Checked
            ? "       Trabalhar com o front-end no framework queridinho da galera, o NEXTJS. "
            : "Working with the front-end in the popular framework, NEXTJS.   "}
          <span className="text-parrot font-bold mx-1">
            {Checked ? "   Como Back-End:  " : " As a Back-End: "}
          </span>
          {Checked
            ? "GUtilizar o PRISMA com NODE para criação das APIs e armazenarinformações no SUPABASE!  "
            : " GUUsing PRISMA with NODE to create APIs and store information in the SUPABASE!"}
        </p>
        {Checked ? " Tecnologias Utilizadas " : " Technologies Used "}
        {/* adding the technolgies */}
        <section className={style.techContainer}>
          <img src={"/project/nextjs.png"} className={style.img1} />
          <img src={"/project/prisma.png"} className={style.img} />
          <img src={"/project/postgressql.png"} className={style.img1} />
          <img src={"/project/supabase.png"} className={style.img2} />
        </section>
      </div>
    </div>
  );
};

export default Project2;
