import Image from 'next/image'

const WeRecommend = () => {
  return (
    <section className=" px-10 xl:px-[120px] mb-[100px]">
    <div className="container xl:px-10">
      <div className="flex flex-col space-t-10 items-start">
        <div className="mb-10  ">
          <h1 className="font-poly text-left font-normal text-4xl leading-[48px] text-gray mb-4">
          We recommend
          </h1>
          <p className="text-[18px] text font-normal leading-6 xl:leading-8 !font-poppins">
          Our experts tried and they liked these services
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
  )
}

export default WeRecommend