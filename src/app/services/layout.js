import React from "react";
import styles from "../page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Navbar />
        {children}
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot2}></div>
        <div className={styles.blurspot3}></div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
