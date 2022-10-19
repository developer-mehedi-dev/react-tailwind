import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section className={`${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-6`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoopbank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[312px] mt-5`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            key={footerLink.key}
          >
            <h4 className="font-poppins font-medium text-white text-[18px] leading-[23px]">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.key}
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary leading-[24px]  ${
                    index !== footerLink.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-center text-white text-[18px] leading-[23px]">
        2021 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
