import React from "react";
import styles from "../page.module.css";
import style from "@/style/about.module.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ourTeam } from "@/asset";
import Navbar2 from "@/components/Navbar2";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Navbar2 />
        <div className={styles.blurspot}></div>
        <div className={styles.blurspot2}></div>
        <div className={styles.blurspot3}></div>
        <div className={style.aboutWrapper}>
          <div className={style.aboutContainer}>
            <div className={style.aboutHero}>
              <div className={style.aboutHeroLeft}>
                <Image
                  src={"/images/aboutIcon1.png"}
                  alt='/'
                  width={324}
                  height={420}
                  className={style.image1}
                />
                <Image
                  src={"/images/aboutIcon2.png"}
                  alt='/'
                  width={220}
                  height={285}
                  className={style.image2}
                />
              </div>
              <div className={style.aboutHeroRight}>
                <h5>ABOUT</h5>
                <p className={style.title}> Zephyer Venture Partners</p>
                <p className={style.info}>
                  Zephyer Venture Partners, a unit under D Square Ventures Pvt
                  Ltd, is a premier investment management unit specializing in
                  serving the unique needs of Ultra High Net Worth Investors
                  (UHNWI). Headquartered in India, the heart of one of the
                  world's fastest-growing economies, we maintain a global
                  network with partners in major financial hubs worldwide.
                </p>
              </div>
            </div>
            <div className={style.anotherHero}>
              <h5>STATISTICS</h5>
              <p className={style.title}>
                In 3 years we reached 8 countries, 193 clients and earning $100k
                USD
              </p>
              <div className={style.anotherHeroInfo}>
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
                    <p>8</p>
                    <h5>COUNTRIES</h5>
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
                    <p>193</p>
                    <h5>CLIENTS</h5>
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
                    <p>$100k</p>
                    <h5>EARNING</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.company}>
              <Image
                src='/images/comapny.png'
                alt={"logo"}
                width={780}
                height={40}
                className={style.companyImage}
              />
            </div>
            <div className={style.ourTeam}>
              <h5>OUR TEAM</h5>
              <p className={style.title}>Meet the team!</p>
              <div className={style.ourTeamCards}>
                {ourTeam.map((item, index) => {
                  return (
                    <div key={index} className={style.ourTeamCard}>
                      <Image
                        src={item.image}
                        alt='logo'
                        width={328}
                        height={356}
                        className={style.ourTeamCardsImage}
                      />
                      <div className={style.ourTeamCardsBottom}>
                        <h5>{item.name}</h5>
                        <p>{item.type}</p>
                      </div>
                    </div>
                  );
                })}
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
