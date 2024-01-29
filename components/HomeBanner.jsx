import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import MobileSearchbar from "./Searchbar/MobileSearchbar";

const HomeBanner = () => {
  return (
    <>

      <div className=" gradient_top"></div>
      <section className="homebanner ">
      <div className=" gradient_bottom"></div>
        <div className="container"> 
          <div className="homebanner_wrapper">
            <div className="text-center mb-12 z-50 px-4 ">
              <h1 className="xl:text-[100px] md:text-[70px] text-[60px] font-normal leading-[70px]  xl:leading-[120px] text-yellow mb-6 font-poly">
                Book The Look
              </h1>
              <p className="font-poppins  w-full mx-auto text-white leading-7 xl:leading-9 opacity-80  px-7 text-[18px] lg:text-[24px]   font-normal">
                Illuminate your beauty and transform your look with our
                exquisite beauty <br />
                services. Book today for a radiant transformation like never
                before!
              </p>
            </div>

            <div className="xl:flex justify-center mb-[100px] z-50 hidden ">
              <Searchbar />
            </div>
            <div className="xl:hidden justify-center mb-[100px] z-50 flex ">
              <MobileSearchbar />
            </div>
            <div className="text-center text-yellow underline decoration-solid underline-offset-8 capitalize cursor-pointer z-30">
              Show all services
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
