"use client";
import "animate.css";
import React, { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Switch from "./components/Switch/Switch";
import CV from "./components/CV/CV";
import Footer from "./components/Footer/Footer";
import ProjectCollection from "./components/ProjectMob/ProjectCollection";
import { Poppins } from "@next/font/google";
import SwitchMob from "./components/Switch/SwitchMob";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
// const poppins = Poppins({ subsets: ["latin"], weight: [400, 500, 600, 700] });
const style = {
  wrapper: `${poppins.className} bg-bgLight animate__animated`,
};
export default function Page() {
  const [Checked, setChecked] = useState(true);
  const handleisChecked1 = (value) => {
    setChecked(value);
  };
  const handleisChecked2 = (value) => {
    setChecked(value);
  };
  console.log(Checked);
  return (
    <main className={style.wrapper}>
      <div className="hidden md:block">
        <Switch isChecked={handleisChecked1} />
      </div>
      <div className="md:hidden block">
        <SwitchMob isChecked={handleisChecked2} />
      </div>
      <Home Checked={Checked} />
      <About Checked={Checked} />
      <Skills Checked={Checked} />
      <Projects Checked={Checked} />
      <ProjectCollection Checked={Checked} />
      <CV />
      <Footer Checked={Checked} />
    </main>
  );
}
