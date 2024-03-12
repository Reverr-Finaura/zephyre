"use client";
import React, { useState } from "react";
import style from "@/style/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { services } from "@/asset";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
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
          <Link className={style.navitemlink} href={"/about"}>
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/about"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
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
                    <div className={style.servicesItemlist}>
                      {item.dropdown.map((nav, i) => {
                        return (
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
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Link className={style.navitemlink} href={"/terms-&-conditions"}>
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
              Terms & Conditions
            </span>
          </Link>
        </div>
        <div className={style.contactarea}>
          <div></div>
          <Link
            className={`${style.contactBtn} ${style.button} ${style.navitemlink}`}
            href={"/contactsection"}
          >
            <span
              className={style.navitem}
              style={{
                backgroundImage:
                  pathname === "/contactsection"
                    ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                    : "none",
                color:
                  pathname === "/contactsection"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Contact Us
            </span>
          </Link>
        </div>

        <div
          className={style.navitemsmobileArea}
          onClick={handleDropdownToggle}
        >
          <Image src={"/images/menu.png"} alt='/' width={30} height={30} />
          {!showDropdown && (
            <div className={style.navitemsmobile}>
              <Link className={style.navitemlink} href={"/"}>
                <span
                  className={style.navitem}
                  style={{
                    backgroundImage:
                      pathname === "/"
                        ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                        : "none",
                    color:
                      pathname === "/"
                        ? "transparent"
                        : "rgba(255, 255, 255, 0.8)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Home
                </span>
              </Link>
              <Link className={style.navitemlink} href={"/about"}>
                <span
                  className={style.navitem}
                  style={{
                    backgroundImage:
                      pathname === "/about"
                        ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
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
                        <div className={style.servicesItemlist}>
                          {item.dropdown.map((nav, i) => {
                            return (
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
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link className={style.navitemlink} href={"/terms-&-conditions"}>
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
                  Terms & Conditions
                </span>
              </Link>
              <Link className={style.navitemlink} href={"/contactsection"}>
                <span
                  className={style.navitem}
                  style={{
                    backgroundImage:
                      pathname === "/contactsection"
                        ? "linear-gradient(90deg, rgba(248, 212, 135, 0.8) -0.54%, rgba(153, 153, 153, 0.8) 99.46%)"
                        : "none",
                    color:
                      pathname === "/contactsection"
                        ? "transparent"
                        : "rgba(255, 255, 255, 0.8)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Terms & Conditions
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
