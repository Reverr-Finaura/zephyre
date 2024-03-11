import React from "react";
import style from "@/style/serviceContent.module.css";

const page = () => {
  return (
    <div className={style.serviceWrapper}>
      <div className={style.serviceContaienr}>
        <h5>Service </h5>
        <h2>
          VC Opportunities <br />
          for Single/Multi Family Office
        </h2>
        <div className={style.serviceContentArea}>
          <div className={style.servicecontentInfo}>
            <p>
              Discover exceptional investment opportunities tailored for
              esteemed single and multi-family offices with Zephyer. Benefit
              from our refined expertise in identifying extraordinary startups
              and ventures, ensuring remarkable returns and visionary market
              prospects.
            </p>
            <h4>Our Services:</h4>
            <p className={style.servieslist}>
              <span className={style.title}>
                Personalized Investment Advisory:
              </span>{" "}
              Tailored advisory services aligned with your investment goals and
              sector preferences.
              <br />
              <span className={style.title}>
                Thorough Deal Evaluation:
              </span>{" "}
              Scrutiny and evaluation of investment prospects across various
              sectors, presenting only exceptional opportunities.
              <br />
              <span className={style.title}>Exclusive Access:</span> Access
              esteemed co-investment ventures, direct investments, and renowned
              VC funds.
              <br />
              <span className={style.title}>Strategic Exit Planning:</span>{" "}
              Crafting sophisticated exit strategies to maximise returns through
              IPOs, mergers, acquisitions, or secondary market transactions.
            </p>
            <h4>Why Choose Us:</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Experienced Team:</span> A
                  legacy of success in VC investing and financial advisory.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Personalised Solutions:</span>{" "}
                  Tailored solutions to meet your specific needs.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Transparency:</span> Regular
                  updates and insights into your investments.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Long-term Partnership:</span> A
                  commitment to nurturing enduring partnerships built on trust
                  and prosperity.
                </p>
              </li>
            </ul>
            <p>
              Elevate your investment portfolio with Zephyer. Inquire today for
              luxury and refinement in VC opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
