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
    <div className="flex flex-col w-full h-full gap-8 overflow-visible sm:gap-10 sm:flex-wrap md:flex-col container-margin lg:justify-evenly lg:items-center lg:flex-row lg:mt-[-10rem]">
      {/* Service & company Info */}
      <div className="flex flex-col flex-wrap gap-8 md:gap-14 lg:gap-20 md:flex-row sm:flex-wrap lg:flex-nowrap">
        {menuData.map((category) => (
          <div key={category.title} className="flex flex-col gap-4 lg:gap-7">
            <p className="text-2xl font-bold text-col text-zinc-50 lg:text-3xl">
              {category.title}
            </p>
            <nav>
              <ul className="flex flex-col gap-4 p-0 font-medium list-none text-zinc-50 lg:gap-5">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className={`${FullMenuCSS.list} whitespace-nowrap w-fit flex items-center gap-3 text-lg hover:text-primary-accent  transition-all duration-200 lg:text-xl`}
                    >
                      <FontAwesomeIcon
                        className={`${FullMenuCSS.arrow} text-base  lg:text-lg`}
                        color="#FF7062"
                        icon={faRightLong}
                      />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
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
  );
}
