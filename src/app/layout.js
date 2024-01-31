import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Menubar from "./components/menubar/menubar";
import Footer from "./components/footer/footer";
import { Manrope } from "next/font/google";

config.autoAddCss = false;
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
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
