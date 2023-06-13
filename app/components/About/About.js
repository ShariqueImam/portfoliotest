import React from "react";
import Image from "next/image";
const About = ({ Checked }) => {
  const style = {
    wrapper:
      "bg-bgLight w-[100%] md:w-[65%] lg:w-[60%] mx-auto flex items-center justify-center md:justify-between my-6 md:my-12",
    left: "w-[90%] md:w-[60%] animate__bounceInLeft animate__animated",
    right:
      "w-[90%] md:w-[30%] hidden md:flex animate__bounceInUp  animate__animated",
    rightMob: "w-[100%] md:w-[30%] flex md:hidden mx-auto",
    container1: "text-white",
    line: "my-4",
  };
  return (
    <div className={style.wrapper}>
      <section className={style.left}>
        <section className={style.container1}>
          <p className="text-white text-2xl md:text-xl my-1  text-center md:text-left">
            {Checked ? "  Olá, meu nome é " : " Hello my name is"}
          </p>
          <p className="text-5xl md:text-4xl font font-bold text-yellow text-center md:text-left">
            {Checked ? "  Eduardo Burko" : " Eduardo Burko"}
          </p>
          <p className="text-white text-3xl md:text-2xl font-bold my-1  text-center md:text-left">
            a.k.a
            <span className="mx-1 text-cyan">
              {Checked ? " phantodev" : "phantodev "}
            </span>
          </p>
          <section className={style.rightMob}>
            <Image src={"/hacker.png"} width={700} height={700} />
          </section>
          <p className="text-white font-bold text-xl md:text-xl my-4">
            {Checked
              ? "      Todo grande projeto começa com uma boa história!"
              : "Every great project starts with a good story! "}
          </p>
          <p className={style.line}>
            {Checked
              ? "   A minha jornada começa como"
              : "My journey starts as a "}
            <span className="mx-1 text-pink font-bold">
              {Checked
                ? " designer freelance em 2004."
                : " freelance designer in 2004. "}
            </span>
          </p>
          <p className={style.line}>
            {Checked ? "Já " : "I "}
            <span className="mx-1 font-bold text-green">
              {Checked
                ? " trabalhei remoto para agências, "
                : " worked remotely for agencies"}
            </span>
            {Checked ? "  desenvolvi Já desenvolvi" : "  I've developed"}
            <span className="mx-1 font-bold text-parrot">
              {Checked
                ? "    grandes projetos para startups "
                : "arge projects for startups "}
            </span>
            {Checked
              ? " e colaborei com pessoas talentosas criar produtos digitais para usocomercial e do Já"
              : "and collaborated with talented people to create digital products for commercial and I 've "}
            <span className="mx-1 font-bold">
              {Checked
                ? " trabalhei remoto para agências, "
                : " worked remotely for agencies"}
            </span>
            {Checked
              ? " desenvolvi consumidor com"
              : "developed consumers with "}
            <span className="mx-1 font-bold text-cyan">
              {Checked
                ? "       altissímo nível técnico."
                : "a very high technical level. "}
            </span>
          </p>
          <p className={style.line}>
            {Checked ? " Sou  " : "I'm"}
            <span className="mx-1 font-bold text-orange">
              {Checked
                ? "    silenciosamente confiante, naturalmente curioso"
                : " quietly confident, naturally curious"}
            </span>
            {Checked
              ? "  e trabalhando perpetuamente em melhorar minhas habilidades a cada ano."
              : "and perpetually working on improving my skills each year. "}
          </p>
          <p className={style.line}>
            {Checked
              ? " A seguir você pode conferir todas as minhas habilidades! "
              : "Below you can check out all my skills! "}
          </p>
          <p className={style.line}>
            {Checked
              ? "  enho grande experiência com dois lados do mundo do desenvolvimento:"
              : "I have great experience with two sides of the development world: "}
            <span className="mx-1 font-bold text-yellow">
              {Checked
                ? "    Design de interface do usuário e desenvolvimento fullstack"
                : " UI design and fullstack development"}
            </span>
          </p>
        </section>
      </section>
      <section className={style.right}>
        <Image src={"/hacker.png"} width={700} height={700} />
      </section>
    </div>
  );
};

export default About;
