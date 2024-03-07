"use client";
import React, { useEffect, useState } from "react";
import style from "@/style/Testimonial.module.css";
import { testimonial } from "@/asset";
import badge from "../asset/bage.png";
import Image from "next/image";

const Testimonial = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${style.testimonialCards}`);
      if (element) {
        const scrollPercentage =
          (element.scrollLeft / (element.scrollWidth - element.clientWidth)) *
          100;
        setScrollProgress(scrollPercentage);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={style.testimonial}>
      <div className={style.testimonialContainer}>
        <h5>TESTIMONIAL</h5>
        <h3>
          What do our clients say that we <br />
          never let down?
        </h3>
        <div className={style.testimonialCards}>
          {testimonial.map((item, index) => {
            return (
              <div key={index} className={style.testimonialCard}>
                <div className={style.testimonialCardImg}>
                  <Image src={item.image} alt={"logo"} />
                  <Image src={badge} alt={"badge"} className={style.badge} />
                </div>
                <h5>{item.name}</h5>
                <h6>{item.company}</h6>
                <p>"{item.testimonial}"</p>
              </div>
            );
          })}
        </div>
        <div className={style.scrollIndicator}>
          {Array.from({ length: testimonial.length / 3 }).map((_, index) => (
            <span
              key={index}
              style={{
                color:
                  index * (100 / testimonial.length) < scrollProgress
                    ? "#fff"
                    : "#FFFFFF99",
              }}
              className={`${style.dot}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
