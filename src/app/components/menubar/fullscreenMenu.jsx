import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import FullMenuCSS from "./fullscreenMenu.module.css";
import { contactInfo, socialInfo, menuData } from "../../data/companyInfo";

export default function FullscreenMenu() {
  return (
    <div
      className={`${FullMenuCSS.height} absolute  lg:fixed left-0 z-[998] flex items-center justify-center w-full pt-6 lg:pt-0 py-16 top-[4.9rem] bg-secondary-accent overflow-y-auto`}
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
                    title={`${menuItem.title} Page`}
                    href={menuItem.link}
                    className={`${FullMenuCSS.list} font-medium whitespace-nowrap w-fit flex items-center gap-3 text-lg hover:text-primary-accent transition-all duration-200 lg:text-xl`}
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
        <div className="flex flex-col gap-5 sm:flex-wrap lg:gap-6">
          <h4 className="text-2xl font-bold text-col lg:text-3xl text-zinc-50">
            Collaborate with us
          </h4>
          <div className="flex flex-col gap-4 lg:gap-5">
            {contactInfo.slice(0, 3).map((info, index) => (
              <a
                title={info.title}
                target="_blank"
                href={info.link}
                key={index}
                className={`${FullMenuCSS.link} font-medium w-fit flex items-center space-x-4 cursor-pointer`}
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
          <div className="flex items-center gap-10 mt-2 lg:mt-2">
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
