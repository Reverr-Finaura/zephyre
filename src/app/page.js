import HeroBanner from "@/components/HeroBanner";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Articel from "@/components/Articel";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot2}></div>
        <div className={styles.blurspot3}></div>
        <HeroBanner />
      </div>
      <Articel />
      <Service />
      <Testimonial />
      <Footer />
    </main>
  );
}
