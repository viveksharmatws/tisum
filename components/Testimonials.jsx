"use client";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <section className="py-[100px]">
          <div className="container px-10">
            <div className=" max-xl:flex-col flex gap-10">
              <div className="flex flex-col justify-between min-w-[300px]  ">
                <div className="flex flex-col space-y-6 ">
                  <h2 className="text-[36px] font-poly font-normal leading-[48px] ">
                    what people say about us
                  </h2>
                  <p className="text-[18px] font-normal gray_two font-poppins leading-normal">
                    we are proud of what our reviewers have to say
                  </p>
                </div>
                <div className="flex justify-start gap-5 pt-12 xl:pt-6 ">
                  <Image
                    src="/img/Arrowleft.png"
                    width={50}
                    height={50}
                    alt="left arrow"
                  />

                  <Image
                    src="/img/arrowright.png"
                    width={50}
                    height={50}
                    alt="right arrow"
                  />
                </div>
              </div>

              <div className="flex  gap-[34px] w-full ">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 ">
                    <div className="p-10 flex-col rounded-[50px] border border-gray_four space-y-[35px] relative">
                      <div className="flex flex-col justify-between gap-4 ">
                        <div className="flex gap-1">
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div>
                          <h2 className="text-[16px] font-medium font-poppins text-black">
                            The best booking system
                          </h2>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins">
                            Great experience, easy to book. Paying for
                            treatments is so convenient — no cash or cards
                            needed!
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div>
                          <Image
                            src="/img/userpicdemo.svg"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-[16px] font-medium font-poppins text-black">
                            Cheyenne Stanton
                          </h3>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins ">
                            London, UK
                          </p>
                        </div>
                      </div>
                      <div className="top-1 right-5 absolute">
                        <Image
                          src="/img/quotes.svg"
                          alt=" quotes"
                          width={76}
                          height={57}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className=" md:basis-1/2 ">
                    <div className="p-10 flex-col rounded-[50px] border border-gray_four space-y-[35px] relative">
                      <div className="flex flex-col justify-between gap-4 ">
                        <div className="flex gap-1">
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div>
                          <h2 className="text-[16px] font-medium font-poppins text-black">
                            The best booking system
                          </h2>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins">
                            Great experience, easy to book. Paying for
                            treatments is so convenient — no cash or cards
                            needed!
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div>
                          <Image
                            src="/img/userpicdemo.svg"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-[16px] font-medium font-poppins text-black">
                            Cheyenne Stanton
                          </h3>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins ">
                            London, UK
                          </p>
                        </div>
                      </div>
                      <div className="top-1 right-5 absolute">
                        <Image
                          src="/img/quotes.svg"
                          alt=" quotes"
                          width={76}
                          height={57}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 ">
                    <div className="p-10 flex-col rounded-[50px] border border-gray_four space-y-[35px] relative">
                      <div className="flex flex-col justify-between gap-4 ">
                        <div className="flex gap-1">
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div>
                          <h2 className="text-[16px] font-medium font-poppins text-black">
                            The best booking system
                          </h2>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins">
                            Great experience, easy to book. Paying for
                            treatments is so convenient — no cash or cards
                            needed!
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div>
                          <Image
                            src="/img/userpicdemo.svg"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-[16px] font-medium font-poppins text-black">
                            Cheyenne Stanton
                          </h3>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins ">
                            London, UK
                          </p>
                        </div>
                      </div>
                      <div className="top-1 right-5 absolute">
                        <Image
                          src="/img/quotes.svg"
                          alt=" quotes"
                          width={76}
                          height={57}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 ">
                    <div className="p-10 flex-col rounded-[50px] border border-gray_four space-y-[35px] relative">
                      <div className="flex flex-col justify-between gap-4 ">
                        <div className="flex gap-1">
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                          <Image
                            src="/img/Brightstar.png"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div>
                          <h2 className="text-[16px] font-medium font-poppins text-black">
                            The best booking system
                          </h2>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins">
                            Great experience, easy to book. Paying for
                            treatments is so convenient — no cash or cards
                            needed!
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div>
                          <Image
                            src="/img/userpicdemo.svg"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-[16px] font-medium font-poppins text-black">
                            Cheyenne Stanton
                          </h3>
                          <p className="text-gray_two text-[14px] font-normal  font-poppins ">
                            London, UK
                          </p>
                        </div>
                      </div>
                      <div className="top-1 right-5 absolute">
                        <Image
                          src="/img/quotes.svg"
                          alt=" quotes"
                          width={76}
                          height={57}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </div>  
            </div>
          </div>
        </section>
      </Carousel>
    </>
  );
};

export default Testimonials;
