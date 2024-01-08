import Link from "next/link";
import Menubar from "./components/menubar/menubar";

export default function Home() {
  return (
    <>
      <Menubar />
      <div className="test">Home page</div>
      <Link href="/home"></Link>
    </>
  );
}
