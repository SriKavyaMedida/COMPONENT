import React from "react";
import Anits from "./anits"; // Import the array

const AnitsSection = () => {
  return (
    <section className="text-white bg-[#2C3E50] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">ANITS GALLERY</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {Anits.map((anitsImage, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt={`anits ${index + 1}`}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={anitsImage.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnitsSection;
