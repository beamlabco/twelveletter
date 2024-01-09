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
      className="flex justify-center items-center top-0  w-full h-24 bg-[#fff] "
    >
      <div className="container-margin z-50 flex justify-between h-full items-center w-full">
        <picture>
          <img
            className="w-[190px]"
            src={isOpen ? "/LogoWhite.png" : "/Logo.png"}
          />
        </picture>
        <label className={MenuBarCSS["label"]} htmlFor="burger">
          <input onClick={handleMenuToggle} type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full pt-6 pb-12  bg-secondary-accent z-40 flex justify-center items-center">
          <FullscreenMenu />
        </div>
      )}
    </div>
  );
}
