import React from "react";

export default function card() {
  return (
    <li className="relative w-full h-full min-w-0 col-span-1 overflow-hidden rounded-md group">
      <a className="relative w-full cursor-pointer card-container">
        <img
          className="top-0 left-0 object-cover w-full h-full transition-opacity "
          src="/assets/Portfolio/p1.png"
          alt="Card Image"
        ></img>
        <div className="absolute inset-0 flex items-end h-full">
          <div className="w-full px-3 py-2 transition-opacity ease-in opacity-0 duration-400 bg-gradient-to-t from-black via-black to-transparent group-hover:opacity-75">
            <h4 className="font-medium tracking-wider text-white">Test card</h4>
          </div>
        </div>
      </a>
    </li>
  );
}
