import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const contactInfo = [
  {
    icon: faLocationDot,
    title: "Kupondole, Lalitpur, Nepal",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  { icon: faPhone, title: "+977 9802366500", link: "tel:+9779802366500" },
  {
    icon: faEnvelope,
    title: "pranisha@twelveletter.co",
    link: "mailto:pranisha@twelveletter.co",
  },
  {
    icon: faLocationDot,
    title: "Your Location",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  { icon: faPhone, title: "+977 90000000", link: "tel:+977900000000" },
];

export const socialInfo = [
  {
    icon: faInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/twelveletter.company",
    color: "#E1306C",
  },
  {
    icon: faLinkedinIn,
    title: "Linkedin",
    link: "https://www.linkedin.com/company/79433400/",
    color: "#0a66c2",
  },
  {
    icon: faFacebookF,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61554349688894",
    color: "#316FF6",
  },
  { icon: faTiktok, title: "Tiktok", link: "#", color: "#000" },
];

export const menuData = [
  {
    title: "Services",
    items: [
      { title: "Digital Marketing", link: "/service/digital-marketing" },
      {
        title: "Web Design & Development",
        link: "/service/web-design-and-development",
      },
      {
        title: "Graphic Design Expertise",
        link: "/service/graphic-design-expertise",
      },
      { title: "Content Creation", link: "/service/content-creation" },
      { title: "In-House Photoshoot", link: "/service/in-house-photoshoot" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Home", link: "/" },
      { title: "Portfolio", link: "/portfolio" },
      { title: "About Us", link: "/about-us" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Policies", link: "/policies" },
    ],
  },
];
