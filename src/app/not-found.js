import Link from "next/link";
import ContactModule from "./components/contactModules/contactModule";
import RecommendPortfolio from "./components/recommendPortfolio/recommendPortfolio";

export default function NotFound(props) {
  const { message } = props;
  return (
    <>
      <div className="min-h-[70vh] container-margin flex flex-col items-center justify-center">
        <img
          src="/not-found-cube.png"
          alt="Not Found"
          className="max-w-[150px] md:max-w-[200px] w-full"
        />
        <h1 className="mt-5 text-4xl font-semibold md:text-5xl gradient font-manrope">
          Oops! 404 Error
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-[200px] md:max-w-[400px] font-semibold text-center font-manrope text-black-shade-300">
          Sorry! ~ {message ? message : "Requested page not found"}
        </p>
        <Link
          className="px-8 py-[0.6rem] md:px-8 md:py-2 text-base md:text-lg font-manrope font-medium text-white rounded-[4px] mt-6 bg-primary-accent transition-all hover:bg-[#fd9a91]"
          href="/"
        >
          Go to home
        </Link>
      </div>

      <ContactModule />
    </>
  );
}
