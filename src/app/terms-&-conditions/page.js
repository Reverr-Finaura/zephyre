import React from "react";
import styles from "../page.module.css";
import style from "@/style/serviceContent.module.css";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

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
            <h5>PAGE </h5>
            <h2>Terms & Conditions</h2>
            <div className={style.serviceContentArea}>
              <div className={style.servicecontentInfo}>
                <p>
                  By accessing and placing an order with Zephyer venture
                  partners, you confirm that you are in agreement with and bound
                  by the terms of service contained in the Terms & Conditions
                  outlined below. These terms apply to the entire website and
                  any email or other type of communication between you and
                  Zephyer venture partners.
                  <br />
                  <br />
                  Under no circumstances shall Zephyer venture partners team be
                  liable for any direct, indirect, special, incidental or
                  consequential damages, including, but not limited to, loss of
                  data or profit, arising out of the use, or the inability to
                  use, the materials on this site, even if Zephyer venture
                  partners team or an authorized representative has been advised
                  of the possibility of such damages. If your use of materials
                  from this site results in the need for servicing, repair or
                  correction of equipment or data, you assume any costs thereof.
                  <br />
                  <br />
                  Zephyer venture partners will not be responsible for any
                  outcome that may occur during the course of usage of our
                  resources. We reserve the rights to change prices and revise
                  the resources usage policy in any moment.
                </p>
                <h4>License</h4>
                <p>
                  Zephyer venture partners grants you a revocable,
                  non-exclusive, non- transferable, limited license to download,
                  install and use the website strictly in accordance with the
                  terms of this Agreement.
                  <br />
                  <br />
                  These Terms & Conditions are a contract between you and
                  Zephyer venture partners ("we," "our," or "us") grants you a
                  revocable, non-exclusive, non- transferable, limited license
                  to download, install and use the website strictly in
                  accordance with the terms of this Agreement.
                </p>
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
