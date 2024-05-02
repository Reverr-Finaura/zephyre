"use client";
import { Giftcity, resource, services } from "@/asset";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "../style/navbar2.module.css";
import Image from "next/image";
import { DropdownMenu } from "./Navbar2";

const Mobilenavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={style.navitemsmobileArea}>
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <Image src='/images/menu.png' alt='Menu' width={40} height={40} />
      </div>
      <div>
        {showDropdown && (
          <div className={style.navitemsmobile}>
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
            <DropdownMenu dropmenu={Giftcity} menuname="Gift city" />
            <div className={style.navbarItemdiv} onClick={() => router.push("/business")}>
              <span
                className={style.navitem}
                style={{
                  backgroundImage:
                    pathname === "/business"
                      ? "linear-gradient(90deg, #F9D689 0%, #BE7A31 100%)"
                      : "none",
                  color:
                    pathname === "/business" ? "transparent" : "rgba(255, 255, 255, 0.8)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Business
              </span>
            </div>
            <div className={style.navbarItemdiv} onClick={() => router.push("/invest")}>
              <span
                className={style.navitem}
                style={{
                  backgroundImage:
                    pathname === "/invest"
                      ? "linear-gradient(90deg, #F9D689 0%, #BE7A31 100%)"
                      : "none",
                  color:
                    pathname === "/invest" ? "transparent" : "rgba(255, 255, 255, 0.8)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Invest
              </span>
            </div>
            <DropdownMenu dropmenu={services} menuname="Services" />

            <div
              className={style.navbarItemdiv}
              onClick={() => router.push("/infrastructure")}
            >
              <span
                className={style.navitem}
                style={{
                  backgroundImage:
                    pathname === "/infrastructure"
                      ? "linear-gradient(90deg, #f9d689 0%, #be7a31 100%)"
                      : "none",
                  color:
                    pathname === "/infrastructure"
                      ? "transparent"
                      : "rgba(255, 255, 255, 0.8)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Infrastructure
              </span>
            </div>
            <DropdownMenu dropmenu={resource} menuname="Resources" />
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobilenavbar;

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
                          onClick={() => nagivate(nav.link)}
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
              onClick={() => nagivate("/terms-&-conditions")}
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
