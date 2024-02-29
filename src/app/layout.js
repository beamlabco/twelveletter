import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Menubar from "./components/menubar/menubar";
import Footer from "./components/footer/footer";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

config.autoAddCss = false;

export const metadata = {
  title: {
    template: "%s | TwelveLetter",
    default:
      "Empowering Your Digital Success, One Click at a Time|TwelveLetter",
  },
  description:
    "Unlocking the Potential of Your Online Presence with Innovative Solutions, Strategic Insights, and Tailored Strategies Designed to Elevate Your Brand's Visibility, Drive Engagement, and Fuel Sustainable Growth in the Ever-Evolving Digital Landscape.",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const visby = localFont({
  src: [
    {
      path: "./fonts/VisbyRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/VisbyMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/VisbySemibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/VisbyBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-visby",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${visby.variable}`}>
      <body>
        <Menubar />
        <div id="main">{children}</div>
        <Footer />
      </body>
      <script
        async
        src="https://www.google.com/maps/d/embed?mid=1BQL9p2tnGAJW3qAgNf1kOwkuA-j74eE&ehbc=2E312F&noprof=1"
      ></script>
    </html>
  );
}
