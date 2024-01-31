import React from "react";
import "./loader.css";
export default function loader() {
  return (
    <div className="flex items-center justify-center w-full h-[25rem] md:h-[25rem] lg:h-[40rem]">
      <span className="loader"></span>
    </div>
  );
}
