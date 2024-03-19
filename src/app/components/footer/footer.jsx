"use client";
import React from "react";
import Logo from "../brandLogo/brandLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterCSS from "./footer.module.css";

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

const contactInfo = [
  {
    info: "info@twelveletter.co",
    subHeading: "MAIL US",
    link: "mailto:info@twelveletter.co",
  },

  {
    info: "Kupondole, Lalitpur, Nepal",
    subHeading: "VISIT US",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
];

const servicesInfo = [
  {
    title: "Branding",
    link: "/service/branding",
  },
  {
    title: "Digital Marketing",
    link: "/service/digital-marketing",
  },
  {
    title: "SEO and Analysis",
    link: "/service/seo-analyasis",
  },
  {
    title: "Graphic Contents",
    link: "/service/graphic-content",
  },
  {
    title: "Motion Graphics",
    link: "/service/motion-graphics",
  },
];

const companyInfo = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export default function footer() {
  return (
    <footer id="footer" className="bg-secondary-accent">
      <div className="pt-16 pb-16 space-y-8 tracking-wider lg:pt-20 container-margin">
        <div className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-3">
          <div className="w-full max-w-[300px]">
            <Link title="Logo" href="/">
              <Logo whiteLogo={true} />
            </Link>

            <p className="max-w-xs mt-4 leading-loose text-regular text-zinc-100">
              Twelveletter- Empowering Your Digital Success, One Click at a
              Time.
            </p>

            <ul className="flex gap-8 mt-8">
              {socialInfo.map((socialInfo, index) => (
                <li key={index}>
                  <a
                    title={socialInfo.title}
                    className="text-3xl transition-all duration-300 text-zinc-50 hover:text-primary-accent"
                    href={socialInfo.link}
                  >
                    <FontAwesomeIcon icon={socialInfo.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {/* Services Info */}
            <div>
              <p className="text-2xl font-bold tracking-wider text-zinc-100">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-zinc-100">
                {servicesInfo.map((service, index) => (
                  <li key={index}>
                    <Link
                      title={service.title}
                      href={service.link}
                      className={`${FooterCSS.list} whitespace-nowrap w-fit flex items-center gap-3 text-base hover:text-primary-accent  transition-all duration-200 lg:text-lg`}
                    >
                      <FontAwesomeIcon
                        className={`${FooterCSS.arrow} text-base  lg:text-lg`}
                        color="#FF7062"
                        icon={faRightLong}
                      />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Info */}
            <div>
              <p className="text-2xl font-bold tracking-wider text-zinc-100">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-zinc-100">
                {companyInfo.map((service, index) => (
                  <li key={index}>
                    <Link
                      title={service.title}
                      href={service.link}
                      className={`${FooterCSS.list} w-fit flex items-center gap-3 text-base hover:text-primary-accent  transition-all duration-200 lg:text-lg`}
                    >
                      <FontAwesomeIcon
                        className={`${FooterCSS.arrow} text-base lg:text-lg`}
                        color="#FF7062"
                        icon={faRightLong}
                      />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div className="-mt-2 lg:mt-2">
              <ul className="mt-2 space-y-6 text-sm">
                {contactInfo.map((contactInfo, index) => (
                  <li key={index} className="flex flex-col gap-1">
                    <span className="font-semibold tracking-wider text-md text-primary-accent">
                      {contactInfo.subHeading}
                    </span>

                    <a
                      title={contactInfo.info}
                      href={contactInfo.link}
                      className={`${FooterCSS.link} w-fit relative overflow-hidden text-lg font-medium text-zinc-100`}
                    >
                      {contactInfo.info}

                      <span className={FooterCSS.underline}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-[0.1rem] border-t-0 bg-neutral-100 dark:opacity-50"></hr>
        <div className="flex flex-wrap justify-between gap-2">
          <Link
            title="Terms and conditions"
            className="text-s text-zinc-400 font-manrope hover:text-primary-accent"
            href="/terms-and-conditions"
          >
            Terms & Conditions
          </Link>
          <p className="text-s text-zinc-400">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
