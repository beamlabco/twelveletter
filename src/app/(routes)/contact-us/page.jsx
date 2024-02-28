import Contact from "./contact";

export const metadata = {
  title: "Contact Us and leave us a line",
  description:
    "Get in touch: Reach out to us for inquiries, assistance, or collaborations. Phone: +977 9802366500, Email: pranisha@twelveletter.co, Location: Kupondole, Lalitpur, Nepal",
  keywords: [
    "Twelveletter",
    "digital experiences",
    "brand empowerment",
    "connect",
    "contact",
  ],
  alternates: {
    canonical: "/contact-us",
  },
};
export default function page() {
  return (
    <>
      <Contact />
    </>
  );
}
