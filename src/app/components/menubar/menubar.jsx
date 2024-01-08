"use client";
import React, { useState } from "react";
import MenuBarCSS from "./menubar.module.css";
import FullscreenMenu from "./fullscreenMenu";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ backgroundColor: !isOpen ? "#fff" : "#374852" }}
      className="flex justify-center items-center top-0  w-full h-24  bg-[#fff]"
    >
      <div className="relative z-50 flex justify-between items-center w-full max-w-[1450px]">
        <picture>
          <img
            className="w-[180px]"
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
        <div className="fixed top-0 left-0 w-full h-full bg-secondary-accent z-40 flex justify-center items-center">
          <FullscreenMenu />
        </div>
      )}
    </div>
  );
}
