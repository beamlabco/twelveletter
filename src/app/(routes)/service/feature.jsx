"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timelineOverride.css";
import TimelineCSS from "./timeline.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  const WorkIcon = () => <FontAwesomeIcon size="lg" icon={faCheck} />;
  const BuildingIcon = () => <FontAwesomeIcon size="lg" icon={faCheck} />;
  const AchievementIcon = () => <FontAwesomeIcon size="lg" icon={faCheck} />;
  const TickIcon = () => <FontAwesomeIcon size="lg" icon={faCheck} />;
  const House = () => <i className="fas fa-home"></i>;
  const TimelineData = [
    {
      id: 1,
      title: "Social Media Management",

      description:
        "Optimizing website content, structure, and technical aspects to improve visibility on search engines, thereby increasing organic traffic and enhancing online discoverability.",

      icon: <BuildingIcon />,
    },
    {
      id: 2,
      title: "SEO Optimization",

      description:
        "Developing and executing social media strategies to engage the target audience, increase brand awareness, and drive conversions through platforms like Facebook, Twitter, Instagram, LinkedIn, etc.",
      selected: false,
      icon: "",
    },
    {
      id: 3,
      title: "Strategic Planning",

      description:
        "Crafting comprehensive digital marketing strategies tailored to the client's goals, including market analysis, target audience identification, and goal setting.",
      selected: false,
      icon: <WorkIcon />,
    },
    {
      id: 4,
      title: "Online Advertisment Campaigns",

      description:
        "Implementing and managing targeted online advertising campaigns across platforms such as Google Ads, Facebook, Instagram, LinkedIn, and other relevant channels.",
      selected: false,
      icon: "",
    },
  ];

  return (
    <div className={`${TimelineCSS["T-main-container"]} padding-y-lg`}>
      <VerticalTimeline>
        {TimelineData.map((data) => (
          <VerticalTimelineElement
            visible={true}
            key={data.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#FFFFFF",
              color: "#636363",
              borderTop: data.selected
                ? "4px solid #FF7062"
                : "4px solid #FF7062",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #FFFFFF",
            }}
            iconStyle={{
              background: data.selected ? "#FF7062" : "#FF7062",
              color: "#fff",
            }}
            icon={data.icon ? data.icon : <TickIcon />}
          >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            {data.subtitle ? (
              <h4 className="vertical-timeline-element-subtitle">
                {data.subtitle}
              </h4>
            ) : null}
            <p>{data.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
