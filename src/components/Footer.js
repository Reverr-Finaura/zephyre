import React from "react";
import style from "@/style/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.contactSection}>
          <p className={style.title}>
            Launch Your Wealth Into the Stratosphere with Zephyer venture
            partners
          </p>
          <p className={style.info}>
            Elevate your wealth beyond the bounds with Zephyer Venture Partners.
            We're not just about growth; we're about crafting legacies that
            stand the test of time. Embark with us on a journey where your
            financial dreams soar to new heights. Let's achieve the
            extraordinary together. With Zephyer Venture Partners, there are no
            limits—only beginnings.
          </p>
          <div className={style.herobtn}>
            <div className={`${style.firstbtn} ${style.button}`}>
              <Link href={"/contactsection"} className={style.link}>
                Get In Touch
              </Link>
            </div>
            <div className={`${style.seconfbtn} ${style.button}`}>
              <Link href={"/about"} className={style.link}>
                <span>Learn More</span>
              </Link>
            </div>
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
            <p>Copyright © 2024 Zephyer. All rights reserved.</p>
            {/* <p>A unit of D Square Ventures Pvt Ltd</p> */}
          </div>
          {/* <div className={style.footerOptions}>
            <h5>Service</h5>
            <p>Asset Management</p>
            <p>Estate Planning</p>
            <p>Tax Planning</p>
            <p>Philanthropic Planning</p>
            <p>Investment Deals</p>
            <p>Family Office Services</p>
          </div> */}
          <div className={style.footerOptions}>
            <h5>Quick Links</h5>
            <p>
              <Link href={"/about"} className={style.link}>
                About
              </Link>
            </p>
            <p>
              <Link href={"/contactsection"} className={style.link}>
                Contact
              </Link>
            </p>
            {/* <p>Send Quote</p> */}
            {/* <p>Privacy Policy</p> */}
            <p>
              <Link href={"/terms-&-conditions"} className={style.link}>
                Terms & Conditions
              </Link>
            </p>
            {/* <p>Jobs</p> */}
          </div>
          {/* <div className={style.footerOptions}>
            <h5>Resources</h5>
            <p>Support</p>
            <p>Documentation</p>
            <p>License</p>
            <p>Sitemap</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
