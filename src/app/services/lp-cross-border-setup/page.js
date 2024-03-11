import React from "react";
import style from "@/style/serviceContent.module.css";

const page = () => {
  return (
    <div className={style.serviceWrapper}>
      <div className={style.serviceContaienr}>
        <h5>Service </h5>
        <h2>
          Cross Border Setup (FO & Fund) for LPs
          <br />
        </h2>
        <div className={style.serviceContentArea}>
          <div className={style.servicecontentInfo}>
            <p>
              Experience sophistication and opulence with Zephyer's exclusive
              cross-border family office setup services. Our tailored solutions
              elevate your global financial strategy to unmatched levels,
              meeting your elite standards with precision.
            </p>
            <h4>Our Services:</h4>
            <p className={style.servieslist}>
              <span className={style.title}>
                International Structuring and Compliance:
              </span>{" "}
              Expert guidance on establishing a cross-border family office,
              optimising tax efficiency, and ensuring compliance worldwide.
              <br />
              <span className={style.title}>
                Global Investment Advisory:
              </span>{" "}
              Access elite investment opportunities tailored to your risk
              profile and financial goals.
              <br />
              <span className={style.title}>
                Wealth Preservation and Legacy Planning:
              </span>{" "}
              Access esteemed co-investment ventures, direct investments, and
              Explore sophisticated strategies to protect your assets across
              generations and borders, preserving your family's legacy.
              <br />
              <span className={style.title}>
                Concierge Services and Lifestyle Management:
              </span>{" "}
              Premium lifestyle management solutions to enhance your family's
              well-being and productivity globally.
            </p>
            <h4>Why Choose Us:</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Global Expertise:</span> Benefit
                  from the knowledge and experience of seasoned professionals in
                  international finance and wealth management.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Tailored Excellence:</span> Our
                  services exceed your expectations, upholding your premium
                  standards.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>
                    Confidentiality and Discretion:
                  </span>{" "}
                  Your privacy and reputation are paramount, with a commitment
                  to confidentiality.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}> Strategic Partnerships:</span>{" "}
                  Access our extensive global network for seamless execution and
                  strategic collaborations.
                </p>
              </li>
            </ul>
            <p>
              Embark on unparalleled cross-border wealth management with
              Zephyer. Contact us today for an exclusive consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
