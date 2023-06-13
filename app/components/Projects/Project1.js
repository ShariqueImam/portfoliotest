import React from "react";
import Image from "next/image";
const Project1 = ({ Checked }) => {
  const style = {
    wrapper:
      "flex flex-col md:flex-row mx-auto justify-between bg-bgProject my-7 shadow  text-white w-[90%] md:w-auto mx-auto",
    projectInfoContainer: "p-6 md:px-12 md:pt-12 text-sm lg:text-sm",
    heading1: "font-bold text-2xl md:text-3xl my-1",
    heading2: "text-pink text-xl md:text-2xl my-2",
    heading3: "text-cyan text-lg md:text-xl my-2",
    para: "",
    techContainer:
      "flex items-center flex-wrap items-center justify-center md:justify-start",
    img: "mr-4 w-24 h-18",
    img1: "mr-4 w-24 h-12",
  };
  return (
    <div className={style.wrapper}>
      <Image src={"/project/p1.png"} height={400} width={400} />
      {/* adding the content of the project */}
      <div className={style.projectInfoContainer}>
        <h2 className={style.heading1}>
          {Checked ? " Projeto " : " Project "}
          <span className="text-yellow font-bold mx-1">Hot Swingers</span>
        </h2>
        <p className={style.para}>
          {Checked
            ? "  HTS é a maior rede social para praticantes de swing. Uma rede socialgigantesca desenvolvida utilizando só tecnologia de ponta. ComoTech-Lead, Designer e Front-End Sênior. Este foi o maior projeto queparticipei na vida! "
            : "  HTS is the biggest social network for swingers. A gigantic social network developed using only the latest technology. As Tech-Lead, Designer and Senior Front-End. This was the biggest project I participated in my life!"}
        </p>
        <h2 className={style.heading2}>
          {Checked ? " Principais desafios " : " Main challenges"}
        </h2>
        <p className={style.para}>
          <span className="text-parrot font-bold mx-1">
            {Checked ? "   Como designer:  " : " As a designer : "}
          </span>
          {Checked
            ? " Criar no Figma, mais de 150 telas para todos os modulos existentesdentro do HTS  "
            : " Create more than 150 screens in Figma for all existing modules within HTS. "}
          <span className="text-parrot font-bold mx-1">
            {Checked ? " Como Front-End: " : " As a Front-End: "}
          </span>
          {Checked
            ? " Trabalhar com Realtime Database para chat, steaming de videos com Cloudflare e a utilização da plataforma Firebase no geral, comoFirebase Authentication e Analytics. "
            : "  Working with Realtime Database for chat, steaming videos with Cloudflare and using the Firebase platform in general, such as Firebase Authentication and Analytics "}
          <span className="text-parrot font-bold mx-1">
            {Checked ? "   Como Tech-Lead: " : " As Tech-Lead: "}
          </span>
          {Checked
            ? "  Gerenciar uma equipe de 3 DEVs Júniors e a ponte com Scrum Master, PMe PO. "
            : "Manage a team of 3 Junior DEVs and the bridge with Scrum Master, PM and PO.  "}
        </p>
        <h2 className={style.heading3}>
          {Checked ? " Tecnologias Utilizadas " : " Technologies Used "}
        </h2>
        {/* adding the technolgies */}
        <section className={style.techContainer}>
          <img src={"/project/angular.png"} className={style.img1} />
          <img src={"/project/firebase.png"} className={style.img1} />
          <img src={"/project/nodejs.png"} className={style.img} />
          <img src={"/project/cloudflare.png"} className={style.img} />
        </section>
      </div>
    </div>
  );
};

export default Project1;
