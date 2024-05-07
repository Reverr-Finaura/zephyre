import React from 'react'
import style from "@/style/infrastructure.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    return (
        <section> <div className={style.firstContainer}>
            <h1>THE INFRASTRUCTURE</h1>
            <p>TECHNOLOGY COMBINED WITH GLOBAL PRACTICES</p>
        </div>
            <div className={style.articleInfoSection}>
                {/* <h5>A Utility tunnel</h5> */}
                <p className={style.title}>COMMAND AND CONTROL CENTER FOR GIFT CITY</p>
                <p className={style.info}>
                    Utilizing technological advancements to ensure living and working in the city in a safe and secure manner.
                    <br />
                    <br />
                    PROACTIVE UTILITY INFRASTRUCTURE MONITORING AND MANAGEMENT.

                    <br />
                    Tracking incidents in real time to respond quickly.

                    <br />
                    NOTIFICATION SYSTEM FOR GROUND FORCE GUARANTEEING EARLY PUBLIC UTILITIES AVAILABLE.
                    <br />
                    CCTV surveillance backed up by analytics around-the-clock.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.articleInfoSection}>
                <h5>Automated Waste Collection System</h5>
                <p className={style.title}>FIRST AUTOMATED WASTE MANAGEMENT IN INDIA</p>
                <p className={style.info}>
                    Vacuum chute technology using an Automated Waste Collection System (AWS) requires the least amount of human intervention.
                    <br />
                    <br />
                    100% AUTOMATED NETWORK FOR PLANT AND COLLECTION.

                    <br />
                    Trash gathering through chutes, receptacles, and pipeline networks.
                    <br />
                    RESULTS IN A CLEANER, MORE APPEARING CITY.
                    <br />
                    Reduced noise and emissions due to fewer transportation requirements.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
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
            <div className={style.articleInfoSection}>
                <h5>STP / WTP</h5>
                <p className={style.title}>ADVANCED WATER SYSTEMS</p>
                <p className={style.info}>
                    24-HOUR WATER SUPPLY AVAILABLE.
                    <br />
                    <br />
                    ALLOWS A "DIGGING FREE CITY" FOR FUTURE MAINTENANCE TO BE EASIER.
                    <br />
                    DISTRIBUTION NETWORK METERING AND AUTOMATION AVAILABLE.
                    <br />
                    TO ACHIEVING NEAR ZERO DISCHARGE, SEWAGE RECYCLING AND REUSE.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.articleInfoSection}>
                <h5>Electric Power System, or EPS</h5>
                <p className={style.title}>POWER FABRICATION</p>
                <p className={style.info}>
                    Cutting edge automation setup with real-time monitoring and control for the distribution network, lighting, substation, and distribution. centralized power supply for backup via the same network.
                    <br />
                    <br />
                    GIFT POWER COMPANY HAS A DISTRIBUTION POWER LICENSE.
                    <br />
                    TWO RECEIVING STATIONS WITH REDUNDANT POWER SUPPLIES, ACCEPTING 66/33 KV.
                    <br />
                    IN the event of a grid failure, a centrally located backup power system.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.articleInfoSection}>
                <h5>The district cooling system, or DCS</h5>
                <p className={style.title}>FIRST DISTRICT COOLING INDIA</p>
                <p className={style.info}>
                    When compared to standard air conditioning systems, district cooling systems can save up to 30% on energy consumption, making them sustainable and energy-efficient air conditioning systems.
                    <br />
                    <br />
                    AESTHETICS ARE NOT IMPOSSIBLE WITHOUTDOOR AC UNITS.
                    <br />
                    Removes the need for HVAC space and cooling towers.
                    <br />
                    Reduced Carbon Footprint and Island Heat Impact.
                    <br />
                    MORE ECONOMIC FOR END USERS, LOWER O&M COSTS.
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/about"} className={style.linkName}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page