import Contact from "./contact";

const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;

export const metadata = {
  title: "Contact Us and leave us a line",
  description:
    "Get in touch: Reach out to us for inquiries, assistance, or collaborations. Phone: +977 9802366500, Email: info@twelveletter.co, Location: Kupondole, Lalitpur, Nepal",
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
      <Contact hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
