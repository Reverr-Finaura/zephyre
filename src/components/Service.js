import React from "react";
import style from "@/style/Service.module.css";
import { planing1, planing2 } from "@/asset";
import Image from "next/image";
import reactlogo from "../asset/Rectangle.png";

const Service = () => {
  return (
    <section className={style.service}>
      <div className={style.blurspotService}></div>
      <Image src={reactlogo} alt={"logo"} className={style.blurspotService2} />
      <div className={style.serviceContainer}>
        <h3>Our Services</h3>
        <h5>A Smorgasbord of Financial Delicacies</h5>
        <div className={style.allcard}>
          <div className={style.cardList}>
            {planing1.map((item, index) => {
              return (
                <div key={index} className={style.card}>
                  <Image src={item.image} alt={"logo"} />
                  <div className={style.cardInfo}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <p>View More</p>
                </div>
              );
            })}
          </div>
          <div
            className={style.cardList}
            style={{ borderTop: "1px solid #FFFFFF1A" }}
          >
            {planing2.map((item, index) => {
              return (
                <div key={index} className={style.card}>
                  <Image src={item.image} alt={"logo"} />
                  <div className={style.cardInfo}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <p>View More</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.servicebtn}>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Service;
