import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import ArrowIcon from "../Icons/arrowIcon";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
  { icon: faFacebookF, title: "Facebook", link: "#" },
  { icon: faLinkedinIn, title: "Linkedin", link: "#" },
  { icon: faX, title: "X", link: "#" },
];

export default function FullscreenMenu() {
  return (
    <div className="flex justify-evenly w-full ">
      {/* Service Info */}
      <div className="flex gap-40">
        {menuData.map((category) => (
          <div key={category.title} className="flex flex-col gap-5">
            <p className="text-col text-zinc-50 font-bold text-3xl">
              {category.title}
            </p>
            <nav>
              <ul className="list-none p-0 text-zinc-50 flex flex-col gap-4 text-lg font-medium">
                {category.items.map((item) => (
                  <li key={item.title} className="flex gap-3 items-center">
                    <ArrowIcon />
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
      {/* Company Info */}
      <div className="flex flex-col gap-5">
        <h4 className="text-col text-zinc-50 font-bold text-3xl">
          Collaborate with us
        </h4>
        <div className="flex flex-col gap-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 cursor-pointer text-zinc-50"
            >
              <FontAwesomeIcon icon={info.icon} className="text-lg" />
              <a href={info.link} className="text-lg" target="_blank">
                {info.title}
              </a>
            </div>
          ))}
        </div>
        {/* Social Info */}
        <div className="flex mt-4 gap-10 items-centere">
          {socialInfo.map((socialInfo, index) => (
            <a
              key={index}
              title={socialInfo.title}
              className="text-3xl text-zinc-50 hover:text-primary-accent transition-all"
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
