import React from "react";
import Image from "next/image";
const Information = ({ Checked }) => {
  const style = {
    wrapper: "font font-bold",
    heading1Container:
      "flex items-center justify-center text-2xl md:text-5xl lg:text-5xl",
    heading1: "mx-3 my-1",
    heading2: "mx-3 my-1",
    white: "m-[2px] md:m-1 flex flex-wrap font-normal",
    line2Container:
      "hidden text-2xl md:text-3xl lg:text-3xl md:flex items-center justify-center",
    line3Container:
      "text-sm md:text-xl lg:text-xl flex items-center justify-center w-[85%] md:w-[60%] flex-wrap mx-auto my-4 md:my-1",
  };
  return (
    <div className={style.wrapper}>
      <section className={style.heading1Container}>
        <h2 className={style.heading1}>Typescript</h2>
        <Image src={"/ts.png"} height={30} width={100} />
        <h2 className={style.heading2}>Developer</h2>
      </section>
      {/* adding the line 2 */}
      <section className={style.line2Container}>
        {Checked ? "e" : " A"} <p className="text-orange m-2">UI Designer</p>
        <p className="text-white m-2">{Checked ? "para" : " for"}</p>
        <p className="text-cyan m-2">Web Applications &#128640;</p>
      </section>
      {/* adding the info line3  */}
      <section className={style.line3Container}>
        <span className={style.white}>
          {" "}
          {Checked ? "Habilidades" : "Skills"}
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-yellow font-bold">
          Fullstack
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-yellow font-bold">
          {Checked ? "impecáveis" : "impeccable"}
        </span>
        <span className={style.white}>​ {Checked ? "​à " : "to"}</span>
        <span className={style.white}> {Checked ? "​sua" : "your"}</span>
        <span className={style.white}>
          {Checked ? "disposição" : "disposition"}
        </span>
        <span className={style.white}> {Checked ? "​para" : "for"}</span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-green">
          {Checked ? "resolver" : "resolving"}
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-green">
          {Checked ? "desafios" : "challenges"}
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-green">
          {Checked ? "complexos" : "complex"}
        </span>
        <span className={style.white}> {Checked ? "Sou" : "As"}</span>
        <span className={style.white}> {Checked ? "o" : "a"}</span>
        <span className={style.white}>
          {" "}
          {Checked ? "programador" : "programmer"}
        </span>
        <span className={style.white}> {Checked ? "que" : "what"}</span>
        <span className={style.white}> {Checked ? "você" : "you"}</span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-parrot">
          {Checked ? "impulsionar" : "boost"}
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-parrot">
          {Checked ? "o" : "a"}
        </span>
        <span className="m-[2px] md:m-1 flex flex-wrap text-parrot">
          {Checked ? "sucesso" : "success"}
        </span>
        <span className={style.white}> {Checked ? "dos" : "of the"}</span>
        <span className={style.white}> {Checked ? "seus" : "your"}</span>
        <span className={style.white}>
          {" "}
          {Checked ? "projetos!" : "projects!"}
        </span>
      </section>
    </div>
  );
};

export default Information;
