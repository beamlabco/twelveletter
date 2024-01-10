import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FullMenuCSS from "./fullscreenMenu.module.css";

const menuData = [
  {
    title: "Services",
    items: [
      { title: "Branding", link: "/service/branding" },
      { title: "Digital Marketing", link: "/service/digital-marketing" },
      { title: "SEO and Analysis", link: "/service/seo-analyasis" },
      { title: "Graphic Contents", link: "/service/graphic-content" },
      { title: "Motion Graphics", link: "/service/motion-graphics" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Home", link: "/" },
      { title: "Portfolio", link: "/portfolio" },
      { title: "About Us", link: "/about-us" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Policies", link: "/policies" },
    ],
  },
];

const contactInfo = [
  {
    icon: faLocationDot,
    title: "Your Location",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  { icon: faPhone, title: "+977 9801020202", link: "tel:+97798010202020" },
  {
    icon: faEnvelope,
    title: "email@gmail.com",
    link: "mailto:twelveletter@gmail.com",
  },
];

const socialInfo = [
  {
    icon: faInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/twelveletter.company/",
  },
  { icon: faLinkedinIn, title: "Linkedin", link: "#" },
  { icon: faFacebookF, title: "Facebook", link: "#" },
  { icon: faXTwitter, title: "X", link: "#" },
];

export default function FullscreenMenu() {
  return (
    <div
      className={`${FullMenuCSS.height} absolute  lg:fixed left-0 z-[998] flex items-center justify-center w-full pt-6 lg:pt-0 py-16 top-[5.9rem] bg-secondary-accent overflow-y-auto`}
    >
      <div className="grid xl:max-w-[1250px] grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 container-margin">
        {/* Service & company Info */}
        {menuData.map((category, index) => (
          <div key={index}>
            <p className="text-2xl font-bold tracking-wider text-zinc-100 md:text-3xl">
              {category.title}
            </p>

            <ul className="mt-6 space-y-4 text-zinc-100">
              {category.items.map((menuItem, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href={menuItem.link}
                    className={`${FullMenuCSS.list} whitespace-nowrap w-fit flex items-center gap-3 text-base hover:text-primary-accent transition-all duration-200 lg:text-xl`}
                  >
                    <FontAwesomeIcon
                      className={`${FullMenuCSS.arrow} text-base lg:text-lg`}
                      color="#FF7062"
                      icon={faRightLong}
                    />
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Collaboration Info */}
        <div className="flex flex-col gap-5 sm:flex-wrap lg:gap-7">
          <h4 className="text-2xl font-bold text-col lg:text-3xl text-zinc-50">
            Collaborate with us
          </h4>
          <div className="flex flex-col gap-4 lg:gap-5">
            {contactInfo.map((info, index) => (
              <a
                target="_blank"
                href={info.link}
                key={index}
                className={`${FullMenuCSS.link} w-fit flex items-center space-x-4 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={info.icon}
                  className={`${FullMenuCSS.icon} text-lg lg:text-xl`}
                />
                <p
                  className={`text-lg text-zinc-50 relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className={FullMenuCSS.underline}></span>
                </p>
              </a>
            ))}
          </div>
          {/* Social Info */}
          <div className="flex gap-10 mt-2 items-centere lg:mt-0">
            {socialInfo.map((socialInfo, index) => (
              <a
                key={index}
                title={socialInfo.title}
                className="text-3xl transition-all duration-300 text-zinc-50 hover:text-primary-accent"
                href={socialInfo.link}
              >
                <FontAwesomeIcon icon={socialInfo.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
