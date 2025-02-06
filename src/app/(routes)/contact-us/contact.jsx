"use client";
import { useRef, useState, useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { contactInfo, socialInfo } from "../../data/companyInfo.js";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Contact(props) {
  const { tag, hcaptcha_site_key } = props;
  const initialFormData = {
    name: "",
    email: "",
    organization: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(null);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const [skeletons, setSkeletons] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeletons(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (token) {
      setVisible(false);
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const dataToSend = new FormData();
    // Append form data fields
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("organization", formData.organization);
    dataToSend.append("message", formData.message);
    dataToSend.append("token", token);

    try {
      setLoading(true);
      const res = await axios.post(
        "https://twelveletter.co/api/send",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        setSentStatus("success");
        setTimeout(() => {
          setSentStatus(null);
          setFormData({ ...initialFormData });
          captchaRef.current?.resetCaptcha();
        }, 2000);
      }
      // Handle success
    } catch (error) {
      console.log(error);
      setSentStatus("error");
      setTimeout(() => {
        setSentStatus(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCaptcha = (token) => {
    setToken(token);
    setVisible(false);
  };
  return (
    <div className="container-margin ">
      <section className="top-section-p">
        <PageTitle
          textSize="large"
          subHeading="Contact Us"
          highlightText="Get in Touch:"
          highlightGradient={true}
          heading="Reach Out to Us for Inquiries, Assistance, or Collaborations"
          tag={tag ? tag : "h1"}
        />
      </section>
      <section className="mb-20 margin-t lg:mb-36">
        <div className="flex flex-col flex-wrap w-full gap-10 lg:gap-20 sm:flex-row md:flex-nowrap">
          <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="sender_name"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Full Name <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_name"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b-2 font-medium text-base outline-none text-black-shade-100 tracking-wide transition-all duration-200 border-[#E6E6E6] placeholder-[#9ba4a9] leading-10  focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full ">
                <label
                  htmlFor="sender_email"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Email <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_email"
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b-2 text-base font-medium outline-none text-black-shade-100 tracking-wide transition-all duration-200 placeholder-[#9ba4a9] leading-10 border-[#E6E6E6] focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full ">
                <label
                  htmlFor="sender_org"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Company/ Organization{" "}
                  <span className="text-primary-accent">*</span>
                </label>
                <input
                  id="sender_org"
                  value={formData.organization}
                  type="text"
                  placeholder="org.co"
                  name="organization"
                  required
                  onChange={handleChange}
                  className="border-b-2 font-medium outline-none text-base text-black-shade-100 tracking-wide transition-all duration-200 placeholder-[#9ba4a9] leading-10 border-[#E6E6E6] focus:border-primary-accent focus:outline-none "
                />
              </div>

              <div className="flex flex-col w-full gap-4">
                <label
                  htmlFor="sender_message"
                  className="text-lg font-semibold tracking-wide text-black-shade-200"
                >
                  Message <span className="text-primary-accent">*</span>
                </label>
                <textarea
                  id="sender_message"
                  value={formData.message}
                  name="message"
                  required
                  onChange={handleChange}
                  className="px-3 font-medium text-base text-black-shade-100 tracking-wide focus:border-primary-accent placeholder-[#9ba4a9] py-2 border-2 outline-none transition-all duration-200 rounded-md min-h-40 "
                  placeholder="Send your message here..."
                />
              </div>
              <div className="flex flex-col gap-6 mt-2">
                <Tippy
                  trigger="manual"
                  content={<span>Click to complete CAPTCHA</span>}
                  visible={visible}
                >
                  <div>
                    <HCaptcha
                      sitekey={hcaptcha_site_key}
                      onVerify={handleVerifyCaptcha}
                      ref={captchaRef}
                      size="normal"
                    />
                  </div>
                </Tippy>
                <button
                  type="submit"
                  className={`flex hover:bg-[#ff968f] whitespace-nowrap transition-all h-fit duration-200  w-full items-center max-w-[350px] lg:max-w-[300px] justify-center p-3 text-lg font-semibold tracking-wider rounded-md text-zinc-50 ${
                    loading
                      ? "bg-gray-400"
                      : sentStatus === "success"
                      ? "bg-green-500"
                      : sentStatus === "error"
                      ? "bg-red-500"
                      : "bg-primary-accent"
                  }`}
                >
                  {loading ? (
                    <>
                      Sending{" "}
                      <FontAwesomeIcon
                        className="ml-2 animate-spin"
                        icon={faSpinner}
                      />
                    </>
                  ) : sentStatus === "success" ? (
                    "Sent Successfully"
                  ) : sentStatus === "error" ? (
                    "Not Sent"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="relative flex flex-col w-full gap-10">
            {/* Skeleton element */}
            {skeletons ? (
              <div className="absolute max-w-[700px] md:min-w-[400px] top-0 left-0 w-full h-[480px] bg-gray-300 rounded-sm animate-pulse"></div>
            ) : null}
            {/* Iframe */}

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.0922868049493!2d85.31701576360278!3d27.687430091027473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197a91083ead%3A0xcb2aec894d81d9d1!2sTwelveletter%20Co.!5e0!3m2!1sen!2snp!4v1711371258374!5m2!1sen!2snp"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative rounded-md z-10 w-full h-[480px] max-w-[700px] md:min-w-[300px]"
            ></iframe>
            <div className="space-y-8 ">
              {contactInfo.slice(0, 2).map((info, index) => (
                <a
                  title={info.title}
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 cursor-pointer link w-fit "
                >
                  <FontAwesomeIcon
                    className="text-xl lg:text-2xl text-primary-accent"
                    icon={info.icon}
                    width={20}
                  />
                  <p
                    className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                  >
                    {info.title}
                    <span className="underline"></span>
                  </p>
                </a>
              ))}
              <div className="flex items-center col-span-2 gap-8 sm:gap-8">
                {socialInfo.map((socialInfo, index) => (
                  <a
                    key={index}
                    title={socialInfo.title}
                    className="text-3xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-black-shade-200 hover:text-primary-accent"
                    href={socialInfo.link}
                  >
                    <FontAwesomeIcon icon={socialInfo.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mb-20 lg:mb-36 margin-t ">
        <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-12 lg:gap-x-0 lg:gap-y-10 lg:mt-20">
          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(0, 3).map((info, index) => (
              <a
                title={info.title}
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
          </div>

          <div className="col-span-2 space-y-8 sm:col-span-1">
            {contactInfo.slice(3, 5).map((info, index) => (
              <a
                title={info.title}
                key={index}
                href={info.link}
                className="flex items-center space-x-4 cursor-pointer link w-fit "
              >
                <FontAwesomeIcon
                  className="text-xl lg:text-2xl text-primary-accent"
                  icon={info.icon}
                  width={20}
                />
                <p
                  className={`text-lg sm:text-lg text-black-shade-300 tracking-wider font-semibold relative overflow-hidden lg:text-xl`}
                >
                  {info.title}
                  <span className="underline"></span>
                </p>
              </a>
            ))}
            <div className="flex items-center col-span-2 gap-8 sm:gap-8 sm:col-span-1">
              {socialInfo.map((socialInfo, index) => (
                <a
                  key={index}
                  title={socialInfo.title}
                  className="text-3xl transition-all duration-300 sm:text-3xl lg:text-[2rem] text-black-shade-200 hover:text-primary-accent"
                  href={socialInfo.link}
                >
                  <FontAwesomeIcon icon={socialInfo.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
