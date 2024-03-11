import React from "react";
import style from "@/style/serviceContent.module.css";

const page = () => {
  return (
    <div className={style.serviceWrapper}>
      <div className={style.serviceContaienr}>
        <h5>Service </h5>
        <h2>VC Opportunities for LPs</h2>
        <div className={style.serviceContentArea}>
          <div className={style.servicecontentInfo}>
            <p>
              Immerse yourself in a world of luxury and sophistication with
              Zephyer. Explore exceptional investment opportunities tailored for
              our esteemed lending partners, promising substantial returns and
              strategic portfolio diversification.
            </p>
            <h4>Our Services:</h4>
            <p className={style.servieslist}>
              <span className={style.title}>Strategic Investment Access:</span>{" "}
              Gain access to a handpicked collection of high-potential startups
              across various industries, meticulously aligned with your
              investment criteria.
              <br />
              <span className={style.title}>
                Risk Management and Due Diligence:
              </span>{" "}
              Rest assured with our rigorous due diligence and proactive risk
              mitigation strategies, ensuring prudent and well-informed
              investment decisions.
              <br />
              <span className={style.title}>
                Flexible Investment Structures:
              </span>{" "}
              Choose from a range of bespoke investment structures, including
              direct investments or participation in VC funds, tailored to your
              preferences.
              <br />
              <span className={style.title}>
                Strategic Networking Opportunities:
              </span>{" "}
              Tap into our extensive network of VC firms and industry experts
              for strategic partnerships and co-investment opportunities.
            </p>
            <h4>Why Partner with Us:</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Expertise and Insight:</span>{" "}
                  Benefit from the wisdom of our seasoned professionals, guiding
                  you through the intricate world of VC investing.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>
                    Diversification and Growth:
                  </span>{" "}
                  Expand your portfolio horizons with premium VC opportunities,
                  fostering innovation and growth.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Tailored Solutions:</span>{" "}
                  Experience personalised service tailored to your unique needs
                  and preferences.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Opportunity for Impact:</span>{" "}
                  Support entrepreneurship and innovation while achieving
                  attractive financial returns, contributing to economic growth
                  and prosperity.
                </p>
              </li>
            </ul>
            <p>
              Join Zephyer to elevate your investment portfolio with exclusive
              VC opportunities. Contact us today to embark on this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
