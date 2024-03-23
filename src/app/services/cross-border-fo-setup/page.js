import React from "react";
import style from "@/style/serviceContent.module.css";

const page = () => {
  return (
    <div className={style.serviceWrapper}>
      <div className={style.serviceContaienr}>
        <h5>Service </h5>
        <h2>Cross Border FO Setup for Single/Multi Family Office</h2>
        <div className={style.serviceContentArea}>
          <div className={style.servicecontentInfo}>
            <p>
              Explore unparalleled global wealth management and personalised
              financial planning with Zephyer Venture Partners. Our exclusive
              family office services cater to discerning single and multi-family
              offices seeking sophistication and excellence.
            </p>
            <h4>Our Services:</h4>
            <p className={style.servieslist}>
              <span className={style.title}>
                Expert Consultation and Structuring:
              </span>{" "}
              Tailored strategies to optimise taxes, protect assets, and
              navigate the international landscape seamlessly.
              <br />
              <span className={style.title}>
                Global Investment Advisory:
              </span>{" "}
              Access elite investment opportunities across diverse asset classes
              aligned with your financial objectives and risk tolerance.
              <br />
              <span className={style.title}>
                Wealth Preservation and Legacy Planning:
              </span>{" "}
              Safeguard and perpetuate your family's legacy with sophisticated
              wealth preservation and legacy planning solutions.
              <br />
              <span className={style.title}>
                Family Governance and Education:
              </span>{" "}
              Foster effective family governance frameworks and empower future
              generations through tailored educational programs.
              <br />
              <span className={style.title}>
                Concierge Services and Lifestyle Management:
              </span>{" "}
              Premium lifestyle management and concierge services tailored to
              your family's unique needs and aspirations.
            </p>
            <h4>Why Choose Us:</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Unparalleled Expertise:</span>{" "}
                  Benefit from the knowledge and expertise of seasoned
                  professionals dedicated to delivering precision, efficiency,
                  and excellence.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Tailored Excellence:</span>{" "}
                  Every service meticulously crafted to surpass your
                  expectations, ensuring a seamless and exclusive experience.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Utmost Discretion:</span>{" "}
                  Upholding the highest standards of confidentiality and
                  discretion to safeguard your family's privacy and reputation.
                </p>
              </li>
              <li className={style.listItem}>
                <p>
                  <span className={style.title}>Exclusive Access:</span> Enjoy
                  privileged access to a global network of top-tier advisors,
                  institutions, and opportunities, elevating your family office
                  experience.
                </p>
              </li>
            </ul>
            <p>
              Exclusive Access: Enjoy privileged access to a global network of
              top-tier advisors, institutions, and opportunities, elevating your
              family office experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
