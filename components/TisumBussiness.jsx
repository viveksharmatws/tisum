import Image from "next/image";
import React from "react";

const TisumBussiness = () => {
  return (
    <>
      <section className="bussiness_section">
        <div className="container px-10">
          <div className="flex flex-col">
          <div className=" max-lg:flex-col lg:flex justify-between pt-20">
            <div className="flex flex-col space-y-3">
              <h2 className="font-poly text-[36px] font-normal leading-12">
                Tisume for business
              </h2>
              <p className="max-w-[500px] text-gray_two text-[18px] font-normal font-poppins leading-[32px]  ">
                Supercharge your business for free with world’s top booking
                platform for salons and spas. independently voted no.1 by
                industry professionals.
              </p>
              <button className="text-white bg-gray rounded-[90px]  text-[16px] font-poppins text-center max-w-[180px] min-h-[56px]">
                find out more
              </button>
            </div>
            <div className="  max-sm:max-w-[500px] max-lg:mt-7  p-4 sm:p-7 rounded-[30px] border-2 border-[#E8E8E8] flex flex-col space-y-2 max-h-[126px] max-md:mt-10 ">
              <div className="flex items-center gap-3">
                <h2  className="text-[16px] font-medium font-poppins">Excellent 5/5</h2>
                <Image  src="/img/brightstar.png" alt="star image" width={25} height={25}/>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray font-poppins font-normal leading-8 text-[14px] sm:text-[18px] ">over 1250 reviews on </p>
                <Image  src="/img/capterra.svg" alt="capters image" width={91} height={20} className=" w-[65px] xs:w-[90px] xs-h-[20]"/>
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-[60px]">
              <div className="expty_board"></div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default TisumBussiness;
