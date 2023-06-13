import React from "react";
import Image from "next/image";
const Project2 = ({ Checked }) => {
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
    img1: "mr-4 w-12 md:w-20 h-14",
    img2: "mr-4 w-36 h-18",
  };
  return (
    <div className={style.wrapper}>
      <Image src={"/project/p2.png"} height={400} width={400} />
      {/* adding the content of the project */}
      <div className={style.projectInfoContainer}>
        <h2 className={style.heading1}>
          {Checked ? " Projeto " : " Project "}
          <span className="text-yellow font-bold mx-1">
            {Checked ? "  Oficina Inteligente " : "  Smart Workshop"}
          </span>
        </h2>
        <p className={style.para}>
          {Checked
            ? "     Um aplicativo sensacional, onde donos de oficinais podem fazer de umaforma muito simples a vistoria de entrada e saída de carros. Umprocesso que era todo manual, agora é tudo automatizado que facilita agestão da oficina "
            : " A sensational application, where workshop owners can carry out, in a very simple way, the inspection of the entry and exit of cars. A process that used to be entirely manual is now automated, which facilitates workshop management. "}
        </p>
        <h2 className={style.heading2}>
          {Checked ? "   Principais desafios " : " Main challenges "}
        </h2>
        <p className={style.para}>
          {Checked
            ? "    Para este projeto o principal desafio foi desenvolver um "
            : " For this project the main challenge was to develop a  "}
          <span className=" font-bold mx-1"> APP MOBILE</span>
          {Checked ? "  em formato " : " in format "}
          <span className="font-bold mx-1">PWA.</span> Trabalhar com um
          <span className=" font-bold mx-1">APP OFFLINE FIRST</span>
          {Checked
            ? "  foi um dosdesafios, já que o acesso a internet em algumas oficinas pode ser umproblema. O processo da utilização de SERVICE WORKERS e atualização docódigo via CODE PUSH, foi um dos desafios interessante neste projeto.Back-end foi uma outra equipe que desenvolveu! "
            : " was one of the challenges, as internet access in some workshops can be a problem. The process of using SERVICE WORKERS and updating the code via CODE PUSH was one of the interesting challenges in this project. Back-end was another team that developed it! "}
        </p>
        <h2 className={style.heading3}>
          {Checked ? "    Tecnologias Utilizadas " : " Technologies Used "}
        </h2>
        {/* adding the technolgies */}
        <section className={style.techContainer}>
          <img src={"/project/reactjs.png"} className={style.img} />
          <img src={"/project/mysql.png"} className={style.img1} />
          <img src={"/project/netcore7.png"} className={style.img} />
        </section>
      </div>
    </div>
  );
};

export default Project2;
