"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "../style/navbar2.module.css";
import Image from "next/image";
import { services } from "@/asset";
import Mobilenavbar from "./Mobilenavbar";

const Navbar2 = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = (link) => {
    router.push(link);
    setIsOpen(false);
  };
  return (
    <div className={style.Navbar2}>
      <div className={style.Navbarcontainer}>
        <div onClick={() => router.push("/")}>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={180}
            height={54}
            className={style.navbarLogoimg}
          />
        </div>
        <div className={style.navbarItems}>
          <div className={style.navbarItemdiv} onClick={() => router.push("/")}>
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/"
                    ? "linear-gradient(90deg, #F9D689 0%, #BE7A31 100%)"
                    : "none",
                color:
                  pathname === "/" ? "transparent" : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Home
            </span>
          </div>
          <div
            className={style.navbarItemdiv}
            onClick={() => router.push("/about")}
          >
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/about"
                    ? "linear-gradient(90deg, #f9d689 0%, #be7a31 100%)"
                    : "none",
                color:
                  pathname === "/about"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              About
            </span>
          </div>
          <div
            className={style.navbarItemdiv}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={style.navitem}
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "transparent",
              }}
            >
              Services
            </span>
            {isOpen && (
              <div
                className={`${style.navitemservice} ${
                  isOpen ? style.open : ""
                }`}
              >
                {services.map((item, index) => (
                  <div key={index} className={style.servicesItem}>
                    <span
                      className={style.navitem}
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        backgroundColor: "transparent",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </span>
                    <div className={style.servicesItemlist}>
                      {item.dropdown.map((nav, i) => (
                        <div
                          key={i}
                          onClick={() => handleItemClick(nav.link)}
                          className={style.navbarItemdiv}
                        >
                          <span
                            className={style.navitem}
                            style={{
                              backgroundImage:
                                pathname === nav.link
                                  ? "linear-gradient(90deg, #f9d689 0%, #be7a31 100%)"
                                  : "none",
                              color:
                                pathname === nav.link
                                  ? "transparent"
                                  : "rgba(255, 255, 255, 0.8)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                            }}
                          >
                            {nav.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div onClick={() => router.push("/contactsection")}>
          <div
            className={style.contactBtn}
            onClick={() => router.push("/contactsection")}
          >
            <span>Contact Us</span>
          </div>
        </div>
        <Mobilenavbar />
      </div>
    </div>
  );
};

export default Navbar2;

{
  /* <div className={style.navbarItemdiv}>
            <span
              className={style.navitem}
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "transparent",
              }}
            >
              Service
            </span>
            <div className={style.navitemservice}>
              {services.map((item, index) => (
                <div key={index} className={style.servicesItem}>
                  <span
                    className={style.navitem}
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </span>
                  <div className={style.servicesItemlist}>
                    {item.dropdown.map((nav, i) => (
                      <div
                        key={i}
                        onClick={() => router.push(nav.link)}
                        className={style.navbarItemdiv}
                      >
                        <span
                          className={style.navitem}
                          style={{
                            backgroundImage:
                              pathname === nav.link
                                ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                                : "none",
                            color:
                              pathname === nav.link
                                ? "transparent"
                                : "rgba(255, 255, 255, 0.8)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                          }}
                        >
                          {nav.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> */
}

{
  /* <div
            className={style.navbarItemdiv}
            onClick={() => router.push("/terms-&-conditions")}
          >
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/terms-&-conditions"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                    : "none",
                color:
                  pathname === "/terms-&-conditions"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              T&Cs
            </span>
          </div> */
}
