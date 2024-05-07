import React from 'react'
import style from "@/style/invest.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    return (
        <section>
            <div className={style.firstContainer}>
                <h1>READY FOR THE FUTURE</h1>
                <p>Invest in the business's core competencies.</p>
            </div>
            <div className={style.secondContainer}>
                <h1>TESTIMONIALS</h1>
                <p>
                    Expert states
                </p>
                <div className={style.testimonialarea}>
                    {testimonial.map((item, key) => {
                        return (
                            <div key={key} className={style.testimonialCard}>
                                <p>{item.content}</p>
                                <Image src='/images/avatar.png' alt="" width={250} height={250} className={style.testimage} />
                            </div>
                        )
                    })}
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
        </section>
    )
}

export default Page

const testimonial = [
    {
        content: "We deeply appreciate the unwavering support and collaboration extended by the Indian government, market authorities, and partners in our collective endeavor to foster openness in capital markets across Asia and India. It's with great pleasure that we embrace membership in the vibrant GIFT City community through our subsidiary, SGX India Connect IFSC Pvt. Ltd. We eagerly anticipate the opportunity to serve international market participants and enhance value for our esteemed clients."
    },
    {
        content: "The World Gold Council's Chief Executive Officer, Mr. David Tait, emphasizes the unparalleled blend of state-of-the-art infrastructure and a unified regulatory framework anchored in GIFT City. This framework establishes clear standards and transparent procedures governing the vaulting, trading, and delivery practices within the gold industry. Such advancements position India to emerge as a pivotal hub for equitable, streamlined, and transparent bullion trading. This transformative shift promises to enhance openness and foster greater confidence across the global gold market."
    },
    {
        content: `The innovative amalgamation of cutting-edge infrastructure and a singular regulatory authority within GIFT City presents a game-changing opportunity for the gold industry," states Mr.John Smith, CEO of Gold Traders International. "With standardized norms and transparent procedures governing vaulting, trading, and delivery standards, India is poised to ascend as a central hub for fair, efficient, and transparent bullion trading. This pivotal development not only enhances openness but also instills heightened confidence in the global gold market, paving the way for unprecedented growth and prosperity.`
    },
]