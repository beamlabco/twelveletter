import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import ArrowIcon from "../Icons/arrowIcon";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
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
    <div className="container-margin  overflow-visible flex flex-col w-full h-full gap-8">
      {/* Service & company Info */}
      <div className="flex flex-col gap-8">
        {menuData.map((category) => (
          <div key={category.title} className="flex flex-col gap-4">
            <p className="text-col text-zinc-50 font-bold text-2xl">
              {category.title}
            </p>
            <nav>
              <ul className="list-none p-0 text-zinc-50 flex flex-col gap-4 font-medium">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className={`${FullMenuCSS.list}  w-fit  flex items-center gap-3  text-lg hover:scale-105 hover:text-primary-accent  transition-all duration-200`}
                    >
                      <FontAwesomeIcon
                        className={`${FullMenuCSS.arrow} text-base`}
                        color="#FF7062"
                        icon={faRightLong}
                      />
                      {/*   <span>
                        <ArrowIcon className="text-3xl" color="#FF7062" />
                      </span> */}
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
      <div className="flex flex-col gap-5">
        <h4 className="text-col text-zinc-50 font-bold text-2xl">
          Collaborate with us
        </h4>
        <div className="flex flex-col gap-4">
          {contactInfo.map((info, index) => (
            <a
              target="_blank"
              href={info.link}
              key={index}
              className={`${FullMenuCSS.link} w-fit flex items-center space-x-4 cursor-pointer`}
            >
              <FontAwesomeIcon
                icon={info.icon}
                className={`${FullMenuCSS.icon} text-lg`}
              />
              <p className={`text-lg text-zinc-50 relative overflow-hidden`}>
                {info.title}
                <span className={FullMenuCSS.underline}></span>
              </p>
            </a>
          ))}
        </div>
        {/* Social Info */}
        <div className="flex mt-2 gap-10 items-centere">
          {socialInfo.map((socialInfo, index) => (
            <a
              key={index}
              title={socialInfo.title}
              className="text-3xl text-zinc-50 hover:text-primary-accent transition-all duration-300"
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
