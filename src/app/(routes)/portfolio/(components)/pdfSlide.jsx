import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReactSlickOverride.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden md:block right-[1%] cursor-pointer top-[47%]"
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="p-2 text-xl rounded-sm bg-[#37485291] hover:bg-[#374852]"
        color="#fff"
        icon={faCaretRight}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden md:block left-[1%] z-10 cursor-pointer top-[47%]"
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="p-2 text-xl rounded-sm bg-[#37485291] hover:bg-[#374852]"
        color="#fff"
        icon={faCaretLeft}
      />
    </div>
  );
}

export default function PdfSlide(props) {
  const { url, numberOfImages } = props;

  // Generate an array of image URLs
  const imageUrls = Array.from(
    { length: numberOfImages },
    (_, index) => `${url}-${index + 1}.webp`
  );

  const config = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="pdfslide">
      <Slider {...config}>
        {imageUrls.map((imageUrl, index) => (
          <div className="flex items-center justify-center w-full" key={index}>
            <img
              src={imageUrl}
              className="w-full h-auto m-auto rounded-sm"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
