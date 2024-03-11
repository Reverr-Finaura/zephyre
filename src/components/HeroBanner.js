import React from "react";
import style from "@/style/Hero.module.css";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <sectio className={style.heroBanner}>
      <div className={style.heroBannerContainer}>
        <h5>Lorem Ipsum </h5>
        <p className={style.title}>
          Elevating Wealth Management for the Ultra High Net Worth
        </p>
        <p className={style.info}>
          Unlock a world of exclusive investment opportunities meticulously
          crafted to align with your unique financial goals and ensure enduring
          success. Elevate your wealth management experience with Zephyer's
          tailored, sophisticated solutions.
        </p>
        <div className={style.herobtn}>
          <button className={style.firstbtn}>Get In Touch</button>
          <button className={style.seconfbtn}>Learn More</button>
        </div>
        <div className={style.company}>
          <Image
            src='/images/comapny.png'
            alt={"logo"}
            width={780}
            height={40}
          />
        </div>
      </div>
    </sectio>
  );
};

export default HeroBanner;
