"use client";
import React, { useState, useEffect } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";
import Logo from "../logo/logo";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setHasShadow(scrollY > 0);
  };

  useEffect(() => {
    const mainElement = document.getElementById("main");
    const footer = document.getElementById("footer");
    if (mainElement) {
      if (isOpen) {
        mainElement.style.display = "none";
        footer.style.display = "none";
      } else {
        mainElement.style.display = "";
        footer.style.display = "";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (mainElement) {
        mainElement.style.overflowY = "visible";
      }
    };
  }, [isOpen]);

  return (
    <header
      style={{
        backgroundColor: !isOpen ? "#fff" : "#374852",
        boxShadow: hasShadow
          ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
          : "",
      }}
      className={`flex sticky justify-center transition-all duration-300 items-center top-0 w-full h-24 lg:h-24 bg-[#fff] `}
    >
      <div className="z-[999] flex items-center justify-between w-full h-full container-margin">
        <a href="/" className="text-white">
          <Logo whiteLogo={isOpen} />
        </a>
        <label
          className={`${MenuBarCSS["label"]} ${
            !isOpen ? MenuBarCSS.labelhover : ""
          }`}
          htmlFor="burger"
        >
          <input onClick={handleMenuToggle} type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {isOpen && (
        <div className="absolute left-0 z-[998] sm:fixed md:h-full flex items-center justify-center w-full pt-6 pb-12 sm:pt-16 sm:h-full lg:pt-0 lg:pb-0 top-20 bg-secondary-accent lg:fixed overflow-y-auto">
          <FullscreenMenu />
        </div>
      )}
    </header>
  );
}
