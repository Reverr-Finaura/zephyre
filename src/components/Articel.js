import React from "react";
import style from "@/style/Article.module.css";
import Image from "next/image";

const Articel = () => {
  return (
    <section className={style.Articel}>
      <div className={style.blurspot}></div>
      <div className={style.articleContainer}>
        <div className={style.Articelimg}>
          <Image
            src='/images/group.png'
            alt={"logo"}
            width={560}
            height={380}
            className={style.articelImage}
            priority={false}
          />
        </div>
        <div className={style.articleInfoSection}>
          <h5>HOW WE WORK?</h5>
          <p className={style.title}>
            Crafting Your Financial Masterpiece: A Symphony of Strategy and
            Innovation
          </p>
          <p className={style.info}>
            At Zephyer, we don't just manage wealth; we curate financial
            odysseys. Picture us as the maestros of your monetary symphony,
            where every investment is a note played to perfection. Our approach?
            A blend of meticulous market analysis, cutting-edge technology, and
            a dash of financial wizardry. We dive deep into the sea of
            opportunities, surf the highest waves of potential, and tailor a
            wealth management strategy that's as unique as your fingerprint.
            With us, your financial journey is not just secure; it's
            exhilarating! Ś
          </p>
        </div>
      </div>
    </section>
  );
};

export default Articel;
