"use client";
import React, { useState } from "react";
import { teamData } from "../../data/team";

export default function Team() {
  // Initialize hover states as an empty object
  const [hoverStates, setHoverStates] = useState({});

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setHoverStates((prev) => ({ ...prev, [index]: true }));
  };

  // Function to handle mouse leave
  const handleMouseLeave = (index) => {
    setHoverStates((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section className="padding-y-lg margin-t container-margin">
      <div>
        <h3 className="text-3xl font-semibold text-center sm:text-3xl md:text-4xl xl:text-5xl">
          Meet our <span className="gradient">dynamic</span> team
        </h3>
        <div className="grid grid-cols-1 gap-4 min[420px]:gap-2 w-full min-[420px]:grid-cols-2 sm:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-8 lg:gap-12 xl:gap-14 margin-t">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="flex flex-col col-span-1 gap-4 cursor-pointer margin-b w-fit"
            >
              <figure className="relative">
                <img
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  src={
                    hoverStates[index]
                      ? team.hoverImage
                        ? team.hoverImage
                        : team.image
                      : team.image
                  }
                  className="relative z-10 w-full transition-all duration-200"
                  alt={team.name}
                />
                <div
                  className={`absolute bottom-0 w-full h-3/4 bg-gradient-to-t ${team.backgroundColor}`}
                ></div>
              </figure>
              <div>
                <h4 className="font-semibold text-center sm:text-left text-xl min[420px]:text-xl capitalize lg:text-xl text-secondary-accent">
                  {team.name}
                </h4>
                <p className="min[420px]:text-sm text-center sm:text-left font-medium capitalize md:text-base xl:text-lg text-primary-accent">
                  {team.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
