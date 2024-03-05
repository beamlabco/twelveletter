"use client";
import React, { useState, useEffect } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";
import Logo from "../brandLogo/brandLogo";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    // Restore scroll position from localStorage
    const scrollY = localStorage.getItem("scrollY");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 0);
      // Save scroll position to localStorage
      localStorage.setItem("scrollY", scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const mainElement = document.getElementById("main");
    const footer = document.getElementById("footer");

    if (mainElement && footer) {
      if (isOpen) {
        mainElement.style.display = "none";
        footer.style.display = "none";
      } else {
        mainElement.style.display = "";
        footer.style.display = "";
      }
    }
  }, [isOpen]);

  return (
    <header
      style={{
        backgroundColor: isOpen
          ? "#374852"
          : hasShadow
          ? "#fff"
          : "transparent",
        boxShadow: hasShadow
          ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
          : "",
        zIndex: 1000,
      }}
      className={`flex sticky justify-center transition-all duration-100 items-center top-0 w-full h-20 lg:h-24 bg-[#fff] `}
    >
      <div className="flex items-center justify-between w-full h-full container-margin">
        <a title="Logo" href="/">
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
            disabled={!isPageLoaded}
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
