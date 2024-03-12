"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "@/style/faq.module.css";

const Queans = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.questioncard}>
      <div className={style.questionarea}>
        <p>{question}</p>
        <div onClick={() => setShow(!show)}>
          <Image
            src={show ? "/images/upperarrow.png" : "/images/downarrow.png"}
            alt={"/"}
            width={25}
            height={25}
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {show && <p>{answer}</p>}
    </div>
  );
};

export default Queans;
