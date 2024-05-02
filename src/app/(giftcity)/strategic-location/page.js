import React from "react";
import style from "@/style/giftcity.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <section className={style.heroBanner}>
            <div className={style.firstContainer}>
                <p className={style.title}>
                    THE GIFT VISION
                </p>
                <p className={style.info}>
                    With the goal of emerging as a preeminent worldwide center for technology and finance, GIFT City's development offers a chance to push policy changes that will create a robust financial ecosystem that is essential for sustaining and growing enterprises. GIFT City is expected to offer a business environment that is as favorable as or better than that of the top international financial centers.
                    <br />
                    <br />
                    A national project of great significance, GIFT City has grown to play a crucial role in India's development as the nation works to fulfill its aspiration of becoming a developed on
                </p>
                <div className={style.herobtn}>
                    <div className={`${style.firstbtn} ${style.button}`}>
                        <Link href={"/contactsection"} className={style.linkName}>
                            Take a tour
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.secondConatiner}>
                <p className={style.title}>
                    ESSENTIAL VALUES FOR US
                </p>
                <p className={style.info}>
                    GIFT City was founded on an unwavering dedication to sustainability and a mission to transform and reinvent the global financial environment.
                    <br />
                    <br />
                    The cornerstones of GIFT City are inclusivity and a supportive environment for excellence. The establishment of a worldwide financial and technological hub is the realization of a vision.
                </p>
            </div>
            <div className={style.secondConatiner}>
                <p className={style.title}>
                    TRI-CITY'S FUTURE
                </p>
                <p className={style.info}>
                    The focal point of the tri-city approach is GIFT CITY, which is situated between Vadodara and Gandhinagar, each 30 minutes apart, on the banks of the Sabarmati River. Gandhinagar serves as the primary center for policy and decision-making, GIFT City serves as the primary economic hub, and Ahmedabad enjoys a magnificent past. Every city offers a unique ecosystem of assistance. Time travel: the past, present, and future are all within thirty minutes' reach.
                    <br />
                    <br />
                    AHMEDABAD INTERNATIONAL AIRPORT IS 20 MINUTES AWAY.
                    AHMEDABAD METRO CONNECTIVITY ALONG NATIONAL HIGHWAY 48
                    15 MINUTES AWAY FROM THE BULLET TRAIN END
                </p>
            </div>

        </section>
    )
}

export default Page