"use client";
import React from "react";
import style from "@/style/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/asset";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <div>
          <Image src='/images/logo.png' alt={"logo"} width={180} height={54} />
        </div>
        <div className={style.navitems}>
          <Link className={style.navitemlink} href={"/"}>
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                    : "none",
                color:
                  pathname === "/" ? "transparent" : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Home
            </span>
          </Link>
          <Link className={style.navitemlink} href={"/aboutus"}>
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/aboutus"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                    : "none",
                color:
                  pathname === "/aboutus"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              About
            </span>
          </Link>
          <div className={style.navitemlink}>
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
              {services.map((item, index) => {
                return (
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
                    <ul className={style.servicesItemlist}>
                      {item.dropdown.map((nav, i) => {
                        return (
                          <li key={i}>
                            <Link
                              key={i}
                              href={nav.link}
                              className={style.navitemlink}
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
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <Link className={style.navitemlink} href={"/ourteam"}>
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/ourteam"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                    : "none",
                color:
                  pathname === "/ourteam"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Our Team
            </span>
          </Link>
        </div>
        <div className={style.contactBtn}>Contact Us</div>
      </div>
    </nav>
  );
};

export default Navbar;
