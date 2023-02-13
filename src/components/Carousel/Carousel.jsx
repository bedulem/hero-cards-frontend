import React, { useState } from "react";
import { Card } from "../Card/Card";
import Button from "../Button/Button";

const Carousel = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-4 px-4 relative group ">
      {data.length >= 1 ? (
        <>
          <Card
            key={data[currentIndex].id}
            set={data[currentIndex].set}
            name={data[currentIndex].name}
            text={data[currentIndex].text}
            type={data[currentIndex].type}
            role={data[currentIndex].role}
            imageFront={data[currentIndex].imageFront}
          />
          {/* Left Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5"
            onClick={prevSlide}
          >
            <Button value={"<"} />
          </div>
          {/* Right Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 "
            onClick={nextSlide}
          >
            <Button value={">"} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {data.map((data, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                {
                  <div className="w-2 h-2 rounded-full bg-principal-white-100 m-1" />
                }
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
