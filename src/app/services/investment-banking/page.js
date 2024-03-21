import React from "react";
import style from "@/style/serviceContent.module.css";

const page = () => {
  return (
    <div className={style.serviceWrapper}>
      <div className={style.serviceContaienr}>
        <h5>Service </h5>
        <h2>
          Investment Banking for Startups
          <br />
        </h2>
        <div className={style.serviceContentArea}>
          <div className={style.servicecontentInfo}>
            <p>
              Elevate your startup's journey with Zephyer venture partners's
              exclusive investment banking services. Our team of industry
              experts offers tailored solutions to fuel your success in the
              entrepreneurial landscape.
            </p>
            <h4>Our Offerings:</h4>
            <p className={style.servieslist}>
              <span className={style.title}>Premier Capital Raising:</span>{" "}
              Access a network of investors for optimal funding through bespoke
              financing solutions.
              <br />
              <span className={style.title}>Luxury M&A Advisory:</span> Receive
              strategic guidance throughout the M&A process, maximising value
              creation with seamless execution.
              <br />
              <span className={style.title}>Strategic Partnerships:</span> Forge
              powerful alliances to expedite market entry and leverage synergies
              for mutual growth.
              <br />
              <span className={style.title}>
                Exclusive Corporate Restructuring:
              </span>
              Optimise operational efficiency and enhance stakeholder returns
              with customised plans.
              <br />
              <span className={style.title}>High-end IPO Advisory:</span>
              Navigate the IPO process with confidence, unlocking access to
              public markets for exponential growth.
            </p>
            <h4>Why Choose Us:</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Unparalleled Expertise:</span>{" "}
                  Our seasoned professionals offer invaluable insights to
                  capitalise on growth opportunities effectively.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Tailored Excellence:</span>{" "}
                  Solutions specifically crafted to your unique needs, ensuring
                  you capitalise on every opportunity. standards.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Exceptional Service:</span> We
                  consistently deliver exceptional results through innovative
                  approaches.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Enduring Partnerships:</span>{" "}
                  Consider us your long-term partners, providing steadfast
                  support at every stage of your journey.
                </p>
              </li>
            </ul>
            <p>
              Unleash your startup's full potential with Zephyer venture
              partners. Contact us today to elevate your success and realise
              ambitious growth aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
