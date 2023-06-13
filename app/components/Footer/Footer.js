import React from "react";
import Image from "next/image";
const Footer = ({ Checked }) => {
  const style = {
    wrapper:
      "bg-bgDark font text-white flex items-center justify-center flex-col flex-col-reverse md:flex-row py-12 mg:py-20",
    headingContainer: " text-center flex flex-col",
    smallContainer: "flex font1 text-xl md:text-2xl lg:text-3xl md:mx-24",
    name: "m-1",
    dev: "m-1 text-pink",
    heading2: "font1 text-yellow",
    line2Container:
      "flex items-center justify-center text-md md:text-3xl font-bold my-3 md:my-4",
    footerInfoContainer: " font-bold my-4 md:my-1",
    footerHeading:
      "text-2xl md:text-3xl lg:text-4xl text-center md:text-left my-4 md:my-0",
    contactContainer: "flex flex-wrap justify-center md:justify-start",
    innerContainer:
      "m-3 flex items-center justify-center text-lg md:text-2xl lg:text-3xl",
  };
  return (
    <div className={style.wrapper}>
      {" "}
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
      {/* adding the contact details on the page */}
      <div className={style.footerInfoContainer}>
        <h2 className={style.footerHeading}>
          <span className="text-yellow mx-2"></span>
          {Checked ? "   Gostou  " : " Did you like "}
          {Checked ? "    do que viu? Vamos  " : "what you saw? Let's  "}
          <span className="text-green mx-2">
            {Checked ? "    trabalhar juntos!  " : " work together! "}
          </span>
        </h2>
        <section className={style.contactContainer}>
          <section className={style.innerContainer}>
            <Image
              src={"/icons/wa.png"}
              height={40}
              width={40}
              className="mr-4"
            />
            <a
              href="https://api.whatsapp.com/send?phone=15551234567"
              target="__blank"
            >
              <p className="text-purple">+55 41 99976090</p>
            </a>
          </section>
          <section className={style.innerContainer}>
            <Image
              src={"/icons/mail.png"}
              height={40}
              width={40}
              className="mr-4"
            />
            <a href="mailto:contact@phanto.com.br">
              <p className="text-pink">contact@phanto.com.br</p>
            </a>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Footer;
