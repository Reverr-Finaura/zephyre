import React from "react";
import style from "@/style/business.module.css";
import Link from "next/link";


const Page = () => {
    return (
        <section>
            <div className={style.firstContainer}>
                <h1>HURDLE FREE BUSINESS AT THE GIFT CITY</h1>
                <div className={style.option}>
                    <div className={style.box}>
                        <p className={style.info}>
                            TARGET BUSINESS
                            <br />
                            SECTORS
                        </p>
                    </div>
                    <div className={style.box}>
                        <p className={style.info}>
                            The characteristics of
                            <br />
                            ECONOMY
                        </p>
                    </div>
                    <div className={style.box}>
                        <p className={style.info}>
                            INTERNATIONAL
                            <br />
                            FINANCIAL SERVICES CENTRE
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.secondContainer}>
                <p>
                    The first of its type in India, GIFT City is a developing global
                    center for financial and IT services that aims to match or surpass
                    internationally benchmarked commercial districts. Modern
                    infrastructure that includes all essential components of urban
                    infrastructure and has great external connectivity support it.
                    Businesses in the technology, financial services, and all other
                    service-related sectors will be sought after as possible city
                    residents.
                </p>
            </div>
            <div className={style.articleInfoSection}>
                <h5>A Utility tunnel</h5>
                <p className={style.title}>UNIVERSITY TUNNEL FIRST IN THE NATION</p>
                <p className={style.info}>
                    For safety purposes, the tunnel within GIFT City will have a total
                    length of around 17 km and be equipped with a fire and smoke detection
                    system, a rodent repellent system, and ventilation.
                    <br />
                    <br />
                    ALLOWS A "DIGGING FREE CITY" FOR FUTURE MAINTENANCE TO BE EASIER.
                    <br />
                    Designed and implemented systems for power, water, sewer, waste, and
                    other utidivties.
                    <br />
                    Offers Services Throughout the City Without Interruptions.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.secondContainer}>
                <h1>The characteristics of ECONOMY</h1>
                <div className={style.list}>
                    <div className={style.spanbox}>Research and development</div>
                    <div className={style.spanbox}> Global dedivvery center</div>
                    <div className={style.spanbox}>Innovation center</div>
                    <div className={style.spanbox}>Back office</div>
                    <div className={style.spanbox}> E-commerce</div>
                    <div className={style.spanbox}>Corporate office</div>
                    <div className={style.spanbox}>Processing center</div>
                    <div className={style.spanbox}> Research and development</div>
                    <div className={style.spanbox}>Support office</div>
                    <div className={style.spanbox}>BPO</div>
                    <div className={style.spanbox}>KPO </div>
                </div>
            </div>
            <div className={style.secondContainer}>
                <h1>INTERNATIONAL FINANCIAL SERVICES CENTRE</h1>
                <p>
                    In India, GIFT City is home to the first International Financial
                    Services Center (IFSC). As a gateway for incoming and outgoing
                    international financial services needs in India, it is perfectly
                    situated. The main objective is to offer financial services that are
                    now only available outside of India to foreign financial institutions,
                    as well as foreign branches and subsidiaries of Indian financial
                    institutions. At the same time as it is growing into a site with an
                    ecosystem similar to other offshore locations, IFSC at GIFT City is
                    also supporting the expansion of India's local financial markets.
                </p>
            </div>
        </section>
    );
};

export default Page;
