"use client";
import React, { useState, useEffect } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";
import Logo from "../brandLogo/brandLogo";

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
        zIndex: 1000,
      }}
      className={`flex sticky justify-center transition-all duration-300 items-center top-0 w-full h-20 lg:h-24 bg-[#fff] `}
    >
      <div className="flex items-center justify-between w-full h-full container-margin">
        <a href="/">
          <Logo whiteLogo={isOpen} />
        </a>
        <label
          className={`${MenuBarCSS["label"]} ${
            !isOpen ? MenuBarCSS.labelhover : ""
          }`}
          htmlFor="burger"
        >
          <input
            onClick={handleMenuToggle}
            autoComplete="off"
            type="checkbox"
            id="burger"
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {isOpen && <FullscreenMenu />}
    </header>
  );
}
