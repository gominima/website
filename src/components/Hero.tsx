import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="flex justify-between flex-col md:flex-row space-y-6">
        <div className="flex flex-col  pl-6 justify-center">
          <div className="text-4xl md:text-5xl text-white font-semibold ">
            The Minimal <span className="text-blue-400">Golang</span> framework
          </div>
          <div className="text-7xl md:text-9xl text-purple-500 font-bold ">
            Minima
          </div>
          <div className="text-xl md:text-2xl text-gray-400 text-left font-semibold pt-3">
            Framework for Go HTTP services with 0 dependencies
          </div>
        </div>
        <div className="bg-purple-800 rounded-l-full relative z-0 pt-4 md:pt-0">
          <img
            className="banner pr-6 mr-6 md:mr-18 "
            src={require("./img/banner.png").default}
            alt="minima code png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
