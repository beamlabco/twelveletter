"use client";
import React, { useState } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ backgroundColor: !isOpen ? "#fff" : "#374852" }}
      className="flex justify-center items-center top-0  w-full h-24 lg:h-28 bg-[#fff] "
    >
      <div className="z-50 flex items-center justify-between w-full h-full container-margin">
        <picture>
          <img
            className="w-[190px] lg:w-[230px]"
            src={isOpen ? "/LogoWhite.png" : "/Logo.png"}
          />
        </picture>
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
        <div className="absolute left-0 z-40 flex items-center justify-center w-full pt-6 pb-12 sm:pt-16 sm:h-full lg:pt-0 lg:pb-0 top-20 bg-secondary-accent lg:fixed">
          <FullscreenMenu />
        </div>
      )}
    </div>
  );
}
