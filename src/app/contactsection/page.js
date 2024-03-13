import Image from "next/image";
import React from "react";
import styles from "../page.module.css";
import styless from "@/style/footer.module.css";
import style from "@/style/contact.module.css";
import ContactForm from "@/components/ContactForm";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Navbar2 />
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot2}></div>
        <div className={styles.blurspot3}></div>
        <div className={style.contactWrapper}>
          <div className={style.contactWrapperleft}>
            <h5>HOW WE WORK?</h5>
            <p className={style.title}>
              We love receiving messages from you, we are waiting for it.
            </p>
            <div className={style.contactTypeItems}>
              <div className={style.contactTypeItem}>
                <div className={style.cotactImage}>
                  <Image
                    src={"/images/phoneIcon.png"}
                    alt='phone'
                    width={30}
                    height={30}
                  />
                </div>
                <div className={style.contactTypeItemsinfo}>
                  <h5>Phone</h5>
                  <p>+62 1234 8921</p>
                </div>
              </div>
              <div className={style.contactTypeItem}>
                <div className={style.cotactImage}>
                  <Image
                    src={"/images/mailIcon.png"}
                    alt='phone'
                    width={30}
                    height={30}
                  />
                </div>
                <div className={style.contactTypeItemsinfo}>
                  <h5>Email</h5>
                  <p>connect@zephyer.club</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.contactWrapperRight}>
            <ContactForm />
          </div>
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
              {/* <p>A unit of D Square Ventures Pvt Ltd</p> */}
            </div>
            {/* <div className={styless.footerOptions}>
              <h5>Service</h5>
              <p>Asset Management</p>
              <p>Estate Planning</p>
              <p>Tax Planning</p>
              <p>Philanthropic Planning</p>
              <p>Investment Deals</p>
              <p>Family Office Services</p>
            </div> */}
            <div className={styless.footerOptions}>
              <h5>Company</h5>
              <p>
                <Link href={"/about"} className={styless.link}>
                  About
                </Link>
              </p>
              <p>
                <Link href={"/contactsection"} className={styless.link}>
                  Contact
                </Link>
              </p>
              {/* <p>Send Quote</p> */}
              {/* <p>Privacy Policy</p> */}
              <p>
                <Link href={"/terms-&-conditions"} className={styless.link}>
                  Term of Service
                </Link>
              </p>
              {/* <p>Jobs</p> */}
            </div>
            {/* <div className={styless.footerOptions}>
              <h5>Resources</h5>
              <p>Support</p>
              <p>Documentation</p>
              <p>License</p>
              <p>Sitemap</p>
            </div> */}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default page;
