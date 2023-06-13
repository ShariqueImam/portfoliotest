import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
const style = {
  wrapper: "rounded ",
  singleNav:
    "flex items-center py-5 p-6 cursor-pointer border-b-[1px] border-bgLight bg-bgDark w-[90vw] mx-auto",
  heading: "set-font text-md  text-white cursor-pointer flex-1 font-bold",
};
const MobileCollctionNav = () => {
  const [Nav, setNav] = useState("");
  const handleNav = (value) => {
    if (value !== Nav) {
      setNav(value);
    } else {
      setNav("");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.singleNav} onClick={() => handleNav("1")}>
        {Nav == "1" ? (
          <AiOutlineDown className="text-green text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-green text-2xl mr-4 " />
        )}
        <h2 className={style.heading}>
          <span className="text-cyan">#01 - </span> Hot Swingers
        </h2>
      </div>
      {Nav == "1" && <Project1 />}
      <div className={style.singleNav} onClick={() => handleNav("2")}>
        {Nav == "2" ? (
          <AiOutlineDown className="text-green text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-green text-2xl mr-4 " />
        )}
        <h2 className={style.heading}>
          {" "}
          <span className="text-cyan">#02 - </span> Gig Pro
        </h2>
      </div>
      {Nav == "2" && <Project2 />}
      <div className={style.singleNav} onClick={() => handleNav("3")}>
        {Nav == "3" ? (
          <AiOutlineDown className="text-green text-2xl mr-4 " />
        ) : (
          <AiOutlineUp className="text-green text-2xl mr-4 " />
        )}
        <h2 className={style.heading}>
          <span className="text-cyan">#03 - </span> Oficina Inteligente
        </h2>
      </div>

      {Nav == "3" && <Project3 />}
    </div>
  );
};

export default MobileCollctionNav;
