import React from "react";
import styles from "../page.module.css";
import style from "@/style/serviceContent.module.css";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { termsAndConditions } from "@/asset";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Navbar2 />
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot3}></div>
        <div className={styles.blurspot2}></div>
        <div className={style.serviceWrapper}>
          <div className={style.serviceContaienr}>
            <h5>Terms & Conditions</h5>
            <h2>
              Read our guidelines for platform use. By accessing our services,
              you agree to these rules covering user conduct, intellectual
              property, and liability.
            </h2>
            <div className={style.serviceContentArea}>
              <div className={style.servicecontentInfo}>
                <p>
                  These Terms and Conditions, along with privacy policy or other
                  terms (“Terms”) constitute a binding agreement by and between
                  ZEPHYER VENTURE PARTNERS LLP, ( “Website Owner” or “we” or
                  “us” or “our”) and you (“you” or “your”) and relate to your
                  use of our website, goods (as applicable) or services (as
                  applicable) (collectively, “Services”).
                  <br />
                  <br />
                  By using our website and availing the Services, you agree that
                  you have read and accepted these Terms(including the Privacy
                  Policy). We reserve the right to modify these Terms at any
                  time and without assigning any reason. It is your
                  responsibility to periodically review these Terms to stay
                  informed of updates.
                  <br />
                </p>
                <h4>
                  The use of this website or availing of our Services is subject
                  to the following terms of use:
                </h4>
                <ul className={style.list}>
                  {termsAndConditions.map((item, index) => (
                    <li className={style.listItem} key={index}>
                      <p>{item.ts}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
