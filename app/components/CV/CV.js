import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import Image from "next/image";
const CV = () => {
  const [Visible, setVisible] = useState(false);

  function handleChange(isVisible) {
    console.log(isVisible);
    if (isVisible) setVisible(true);
  }
  const style = {
    wrapper: `bg-bgDark mx-auto max-w-fit px-4 py-4 md:px-8 md:py-6 flex items-center justify-center my-12 ${
      Visible && "animate__animated animate__tada"
    }`,
    heading: "text-yellow text-2xl md:text-3xl lg:text-4xl font-bold mx-4",
  };
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility
      minTopValue={100}
    >
      <a href="/cv/EduardoBurko - CV.pdf" download>
        <div className={style.wrapper}>
          <h2 className={style.heading}>Download CV</h2>
          <Image src={"/icons/cv.png"} width={45} height={45} />
        </div>
      </a>
    </VisibilitySensor>
  );
};

export default CV;
