"use client";
import React, { useState } from "react";
import style from "@/style/faq.module.css";
import Queans from "./Queans";
import { faqlist } from "@/asset";

const Faq = () => {
  const items = [
    {
      section: 1,
      name: "General",
    },
    {
      section: 2,
      name: "Transaction",
    },
    {
      section: 3,
      name: "Maintenance",
    },
    {
      section: 4,
      name: "Technology",
    },
    {
      section: 5,
      name: "Technology",
    },
  ];
  const [section, setsection] = useState(1);
  return (
    <div className={style.faqWrapperArea}>
      <div className={style.faqWrapperleft}>
        <div className={style.faqWrapperleftbox}>
          {items.map((item) => {
            return (
              <div
                key={item.section}
                className={style.faqWrapperleftboxlist}
                onClick={() => setsection(item.section)}
                style={{
                  color:
                    section === item.section
                      ? "white"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.faqWrapperRight}>
        {faqlist.map((faq, index) => {
          return (
            <Queans question={faq.question} answer={faq.answer} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
