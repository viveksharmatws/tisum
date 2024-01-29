import Image from "next/image";
import React from "react";

const TopRatedServices = () => {
  return (
    <section className="Top_rated">
      <div className="container px-10">
        <div className="flex flex-col">
          <div className=" text-center space-y-5  ">
            <h2 className="text-[36px] font-poly font-normal text-gray leading-10">
              Experience top-rated beauty service
            </h2>
            <p className=" text-[18px] font-poly font-normal  text-gray ">
              One solution, one software. Trusted by the best in the beauty and
              wellness industry
            </p>
          </div>

          
          <div className="p-10 mt-[60px] mb-[30px]  rounded-[30px] relative bg-[#F8F8F9]  ">
            <div className=" flex max-md:justify-start md:flex max-md:flex-col max-md:space-y-[44px] md:items-center">
              <div className="max-md:w-[100px] justify-center p-6 md:p-10 border border-[#DFDFE0] rounded-[20px] shrink-0 ">
                <Image
                  src="/img/Calendar_700million.svg"
                  width={35}
                  height={35}
                  alt="calendar"
                />
              </div>

              <div className=" flex items-center  ">
                <div className=" max-md:flex-col sm:flex items-start md:items-center md:gap-7  md:pl-11 ">
                  <h2 className="text-[28px]  leading-8 sm:mb-0  font-normal text-gray font-poly">
                    700 million+
                  </h2>
                  <span className="text-[16px] sm:text-[18px]  font-normal  font-poppins">
                    Appointments booked on Tisume
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-7 ">
            <div className="p-10  rounded-[30px] relative bg-[#F8F8F9]  ">
              <div className=" flex justify-start flex-col space-y-[44px]">
                <div className="p-7 border border-[#DFDFE0] rounded-[20px]   max-w-[100px]">
                  <Image
                    src="/img/Shakehand.svg"
                    width={35}
                    height={35}
                    alt="calendar"
                  />
                </div>

                <div className=" flex items-center ">
                  <div className="space-y-5">
                    <h3 className="text-[28px] font-normal font-poly text-gray">
                      100,000+
                    </h3>
                    <span>Countries using Tisume </span>
                  </div>
                  <div className="absolute bottom-10 right-10 pl-3">
                    <Image
                      src="/img/Shakehandlight.svg"
                      alt="shakehand"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10  rounded-[30px] relative bg-[#F8F8F9] ">
              <div className=" flex justify-start flex-col space-y-[44px]">
                <div className="p-7 border border-[#DFDFE0] rounded-[20px]    max-w-[100px]">
                  <Image
                    src="/img/Shakehand.svg"
                    width={35}
                    height={35}
                    alt="calendar"
                    className="sm:w-[100px] max-xs:w-[70px]"
                  />
                </div>

                <div className=" flex items-center ">
                  <div className="space-y-5">
                    <h3 className="text-[28px] font-normal font-poly text-gray">
                      100,000+
                    </h3>
                    <span>Partner businesses </span>
                  </div>
                  <div className="absolute bottom-10 right-10 pl-3">
                    <Image
                      src="/img/earthLight.png"
                      alt="shakehand"
                      width={100}
                      height={100}
                      className="sm:w-[100px] xs:w-[70px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10  rounded-[30px] relative bg-[#F8F8F9] ">
              <div className=" flex justify-start flex-col space-y-[44px]">
                <div className="p-7 border border-[#DFDFE0] rounded-[20px]   max-w-[100px]">
                  <Image
                    src="/img/Person.svg"
                    width={35}
                    height={35}
                    alt="calendar"
                  />
                </div>

                <div className=" flex items-center ">
                  <div className="space-y-5">
                    <h3 className="text-[28px] font-normal font-poly text-gray">
                      100,000+
                    </h3>
                    <span>Stylists & professionals</span>
                  </div>
                  <div className="absolute bottom-10 right-10 pl-3">
                    <Image
                      src="/img/personlight.png"
                      alt="shakehand"
                      width={100}
                      height={100}
                      className="sm:w-[100px] max-xs:w-[70px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedServices;
