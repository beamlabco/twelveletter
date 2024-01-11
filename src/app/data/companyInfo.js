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
} from "@fortawesome/free-brands-svg-icons";

export const contactInfo = [
  {
    icon: faLocationDot,
    title: "Your Location",
    link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
  },
  { icon: faPhone, title: "+977 9801020202", link: "tel:+97798010202020" },
  {
    icon: faEnvelope,
    title: "email@gmail.com",
    link: "mailto:twelveletter@gmail.com",
  },
];

export const socialInfo = [
  {
    icon: faInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/twelveletter.company/",
    color: "#E1306C",
  },
  { icon: faLinkedinIn, title: "Linkedin", link: "#", color: "#0a66c2" },
  { icon: faFacebookF, title: "Facebook", link: "#", color: "#316FF6" },
  { icon: faXTwitter, title: "X", link: "#", color: "#000" },
];

export const menuData = [
  {
    title: "Services",
    items: [
      { title: "Branding", link: "/service/branding" },
      { title: "Digital Marketing", link: "/service/digital-marketing" },
      { title: "SEO and Analysis", link: "/service/seo-analyasis" },
      { title: "Graphic Contents", link: "/service/graphic-content" },
      { title: "Motion Graphics", link: "/service/motion-graphics" },
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
