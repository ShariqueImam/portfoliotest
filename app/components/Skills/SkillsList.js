import React from "react";
import Image from "next/image";
const Skillslist = () => {
  const style = {
    wrapper:
      "py-6 md:py-12 flex items-center justify-center flex-col w-[90%] mx-auto",
    line1Container: "flex flex-wrap items-center justify-around",
    img: "m-2 md:m-3 w-[40%] md:w-auto hover:scale-[1.1] transition duration-[200ms]",
  };
  return (
    <div className={style.wrapper}>
      <section className={style.line1Container}>
        <Image src={"/1.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/2.png"} width={220} height={180} className={style.img} />
        <Image src={"/3.png"} width={220} height={180} className={style.img} />
        <Image src={"/4.png"} width={220} height={180} className={style.img} />
      </section>
      <section className={style.line1Container}>
        <Image src={"/5.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/6.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/7.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/8.jpeg"} width={220} height={180} className={style.img} />
      </section>
      <section className={style.line1Container}>
        <Image src={"/9.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/10.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/11.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/12.jpeg"} width={220} height={180} className={style.img} />
      </section>
      <section className={style.line1Container}>
        <Image src={"/13.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/14.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/15.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/16.jpeg"} width={220} height={180} className={style.img} />
      </section>
      <section className={style.line1Container}>
        <Image src={"/17.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/18.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/19.jpeg"} width={220} height={180} className={style.img} />
        <Image src={"/20.jpeg"} width={220} height={180} className={style.img} />
      </section>
    </div>
  );
};

export default Skillslist;
