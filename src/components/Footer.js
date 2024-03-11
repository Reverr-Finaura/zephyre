import React from "react";
import style from "@/style/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.contactSection}>
          <p className={style.title}>
            Launch Your Wealth Into the Stratosphere with Zephyer
          </p>
          <p className={style.info}>
            Elevate your wealth beyond the bounds with Zephyer. We're not just
            about growth; we're about crafting legacies that stand the test of
            time. Embark with us on a journey where your financial dreams soar
            to new heights. Let's achieve the extraordinary together. With
            Zephyer, there are no limits—only beginnings.
          </p>
          <div className={style.herobtn}>
            <button className={style.firstbtn}>Get In Touch</button>
            <button className={style.seconfbtn}>Learn More</button>
          </div>
        </div>
        <div className={style.mainFooter}>
          <div className={style.mainFooterlogo}>
            <Image
              src='/images/footerlogo.png'
              alt={"logo"}
              width={185}
              height={57}
            />
            <p>Copyright © 2024</p>
            <p>A unit of D Square Ventures Pvt Ltd</p>
          </div>
          <div className={style.footerOptions}>
            <h5>Service</h5>
            <p>Asset Management</p>
            <p>Estate Planning</p>
            <p>Tax Planning</p>
            <p>Philanthropic Planning</p>
            <p>Investment Deals</p>
            <p>Family Office Services</p>
          </div>
          <div className={style.footerOptions}>
            <h5>COMPANY</h5>
            <p>About</p>
            <p>Contact</p>
            <p>Send Quote</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Jobs</p>
          </div>
          <div className={style.footerOptions}>
            <h5>RESOURCES</h5>
            <p>Support</p>
            <p>Documentation</p>
            <p>License</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
