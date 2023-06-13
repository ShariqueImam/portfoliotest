import React, { useState } from "react";

import ProjectNav from "./ProjectNav";
const style = {
  wrapper:
    " py-6 w-[100%] mx-auto flex md:hidden mx-auto items-center justify-center",
  heading:
    "text-[#535353] set-font font-normal text-2xl md:text-2xl px-12 py-4 text-center",
};
const MobileCollection = () => {
  const [NavClick, setNavClick] = useState("");
  const handleNavClick = (value) => {
    setNavClick(value);
  };
  return (
    <div className={style.wrapper}>
      <ProjectNav handleNavClick={handleNavClick} />
    </div>
  );
};

export default MobileCollection;
