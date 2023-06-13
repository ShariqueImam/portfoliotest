"use client";
import React from "react";
import Image from "next/image";
import Information from "./Information";
const Home = ({ Checked }) => {
  const style = {
    wrapper:
      "bg-bgDark font text-white flex items-center justify-center flex-col py-5 md:pt-8 md:pb-20 animate__animated animate__fadeIn",
    headingContainer: "text-center flex flex-col",
    smallContainer: "flex font1 text-xl md:text-2xl lg:text-3xl",
    name: "m-1",
    dev: "m-1 text-pink",
    heading2: "font1 text-yellow",
    strong: "font text-green font-bold text-2xl md:text-3xl m-1",
    para1: "font text-semibold text-white leading-[60px]",
    line2Container:
      "flex items-center justify-center text-md md:text-3xl font-bold my-3 md:my-4",
  };
  return (
    <div className={style.wrapper}>
      <section className={style.headingContainer}>
        <section className={style.smallContainer}>
          <h2 className={style.name}>phanto</h2>
          <Image
            src={"/pacman.png"}
            width={50}
            height={10}
            className="md:scale-[0.8]"
          />
          <span className={style.dev}>&lt; dev / &gt;</span>
        </section>
        <p className={style.heading2}>Full Stack Developer</p>
      </section>
      {/* adding the line 2 */}
      <section className={style.line2Container}>
        <span className={style.strong}>&lt; strong &gt;</span>
        <p className={style.para1}>
          {Checked ? "Un Dedicado" : " A dedicated"}
        </p>
        <span className={style.strong}>&lt; /strong &gt;</span>
      </section>
      <Information Checked={Checked} />
    </div>
  );
};

export default Home;
