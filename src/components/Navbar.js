"use client";
import React from "react";
import style from "@/style/Navbar.module.css";
import logo from "../asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navlinks } from "@/asset";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <div>
          <Image src={logo} alt={"logo"} />
        </div>
        <div className={style.navitems}>
          {Navlinks.map((nav, i) => {
            return (
              <Link key={i} href={nav.link} className={style.navitemlink}>
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
        <div className={style.contactBtn}>Contact Us</div>
      </div>
    </nav>
  );
};

export default Navbar;
