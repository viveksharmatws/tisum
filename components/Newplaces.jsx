import Image from "next/image";
import React from "react";

const Newplaces = () => {
  return (
    <>
      <section className="py-[100px] px-10 xl:px-[120px]">
        <div className="container xl:px-10  mx-auto">
          <div className="flex flex-col space-t-10 items-start">
            <div className="mb-10  ">
              <h1 className="font-poly text-left font-normal text-4xl leading-[48px] text-gray mb-4">
                Check Out New Places
              </h1>
              <p className="text-[18px] text font-normal leading-6 xl:leading-8 !font-poppins">
                Now places have just been added. Don’t miss trying new
                experience!
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 xssm::grid-cols-2 justify-center">
              <div className="xl:max-w-[379px] w-full rounded-[12px]  border border-[#E1E6EF]">
                <div className="overflow-hidden flex rounded-t-[12px]">
                  <Image
                    src="/img/HairSalon.png"
                    alt="images of new places"
                    width={380}
                    height={300}
                  />
                </div>
                <div className=" p-5 flex-col flex ">
                  <div className="flex justify-between mb-[12px]">
                    <div className=" flex items-center justify-center py-1 px-3 bg-yellow text-gray rounded-[16px] text-[12px] font-normal font-poppins">
                      Hair salon
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          5.0
                        </span>
                        <Image
                          src="/img/Star.svg"
                          alt="star for rating"
                          width={12}
                          height={12}
                        />
                      </div>
                      <div>
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          (8)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className=" text-[16px] font-normal  leading-6">
                      Decadence Hair & Beauty
                    </h2>
                  </div>
                  <div>
                    <span className=" text-[14px] font-normal font-poppins text-gray_two ">
                      Fitzrovia, London
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-[379px] w-full rounded-[12px]  border border-[#E1E6EF]">
                <div className="overflow-hidden flex rounded-t-[12px]">
                <Image
                    src="/img/Barber.png"
                    alt="images of new places"
                    width={380}
                    height={300}
                  />
                </div>
                <div className=" p-5 flex-col flex ">
                  <div className="flex justify-between mb-[12px]">
                    <div className=" flex items-center justify-center py-1 px-3 bg-yellow text-gray rounded-[16px] text-[12px] font-normal font-poppins">
                    Decadence Hair & Beauty
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          5.0
                        </span>
                        <Image
                          src="/img/Star.svg"
                          alt="star for rating"
                          width={12}
                          height={12}
                        />
                      </div>
                      <div>
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          (8)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className=" text-[16px] font-normal  leading-6">
                      Decadence Hair & Beauty
                    </h2>
                  </div>
                  <div>
                    <span className=" text-[14px] font-normal font-poppins text-gray_two ">
                      Fitzrovia, London
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="max-w-[379px] w-full rounded-[12px]  border border-[#E1E6EF]">
                <div className="overflow-hidden flex rounded-t-[12px]">
                <Image
                    src="/img/NailSalon.png"
                    alt="images of new places"
                    width={380}
                    height={300}
                  />
                </div>
                <div className=" p-5 flex-col flex ">
                  <div className="flex justify-between mb-[12px]">
                    <div className=" flex items-center justify-center py-1 px-3 bg-yellow text-gray rounded-[16px] text-[12px] font-normal font-poppins">
                    Nail salon
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          5.0
                        </span>
                        <Image
                          src="/img/Star.svg"
                          alt="star for rating"
                          width={12}
                          height={12}
                        />
                      </div>
                      <div>
                        <span className=" text-[12px]  font-normal font-poppins mt-[2px]">
                          (8)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className=" text-[16px] font-normal  leading-6">
                      Decadence Hair & Beauty
                    </h2>
                  </div>
                  <div>
                    <span className=" text-[14px] font-normal font-poppins text-gray_two ">
                      Fitzrovia, London
                    </span>
                  </div>
                </div>
              </div>
              

            

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newplaces;
