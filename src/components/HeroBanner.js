import React from "react";
import style from "@/style/Hero.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className={style.heroBanner}>
      <div className={style.heroBannerContainer}>
        <p className={style.title}>
          Elevating Investor opportunities for the Ultra High Net Worth
        </p>
        <p className={style.info}>
          Unlock a world of exclusive investment opportunities meticulously
          crafted to align with your unique financial goals and ensure enduring
          success. Elevate your wealth management experience with Zephyer
          venture partners's tailored, sophisticated solutions.
        </p>
        <div className={style.herobtn}>
          <div className={`${style.firstbtn} ${style.button}`}>
            <Link href={"/contactsection"} className={style.linkName}>
              Get In Touch
            </Link>
          </div>
          <div className={`${style.seconfbtn} ${style.button}`}>
            <Link href={"/about"} className={style.linkName}>
              <span>Learn More</span>
            </Link>
          </div>
        </div>
        <div className={style.company}>
          <Image
            src='/images/comapny.png'
            alt={"logo"}
            width={780}
            height={40}
            className={style.companyImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
