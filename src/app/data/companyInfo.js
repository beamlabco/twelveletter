import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const contactInfo = [
  {
    icon: faLocationDot,
    title: "Kupondole, Lalitpur, Nepal",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  {
    icon: faEnvelope,
    title: "info@twelveletter.co",
    link: "mailto:info@twelveletter.co",
  },
  { icon: faPhone, title: "+977 9802366500", link: "tel:+9779802366500" },

  {
    icon: faLocationDot,
    title: "Florida, USA",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  { icon: faPhone, title: "+01 9802366500", link: "tel:+9779802366500" },
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
  {
    icon: faTiktok,
    title: "Tiktok",
    link: "https://www.tiktok.com/@twelveletter.co?_t=8ju1IwyaRcI&_r=1",
    color: "#000",
  },
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
      { title: "Terms & Conditions", link: "/terms-and-conditions" },
    ],
  },
];
