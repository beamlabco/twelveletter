"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export const SectionInView = ({ sectionName, threshold = 0.5 }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);

  return {
    ref,
    inView,
  };
};
