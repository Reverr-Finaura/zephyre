import styles from "../page.module.css";
import styless from "@/style/footer.module.css";
import style from "@/style/faq.module.css";
import Image from "next/image";
import React from "react";
import Navbar2 from "@/components/Navbar2";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Navbar2 />
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot3}></div>
        <div className={styles.blurspot2}></div>
        <div className={style.faqWrapper}>
          <div className={style.faqWrapperContainer}>
            <h5>PRICING</h5>
            <h2>
              Frequently asked questions, <br />
              maybe the same as yours
            </h2>
          </div>
          <Faq />
        </div>
      </div>
      <footer className={styless.footer}>
        <div className={styless.footerContainer}>
          <div className={styless.mainFooter}>
            <div className={styless.mainFooterlogo}>
              <Image
                src='/images/footerlogo.png'
                alt={"logo"}
                width={185}
                height={57}
              />
              <p>Copyright © 2024</p>
              <p>A unit of D Square Ventures Pvt Ltd</p>
            </div>
            <div className={styless.footerOptions}>
              <h5>Service</h5>
              <p>Asset Management</p>
              <p>Estate Planning</p>
              <p>Tax Planning</p>
              <p>Philanthropic Planning</p>
              <p>Investment Deals</p>
              <p>Family Office Services</p>
            </div>
            <div className={styless.footerOptions}>
              <h5>Company</h5>
              <p>About</p>
              <p>Contact</p>
              <p>Send Quote</p>
              <p>Privacy Policy</p>
              <p>Term of Service</p>
              <p>Jobs</p>
            </div>
            <div className={styless.footerOptions}>
              <h5>Resources</h5>
              <p>Support</p>
              <p>Documentation</p>
              <p>License</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default page;
