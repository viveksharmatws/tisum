"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { timing } from "../../app/constants/constants";
const Searchbar = () => {
  const [date, setDate] = useState(new Date());

  const [fromTime, setFromTime] = useState();
  const [ToTime, setToTime] = useState();

  const updateDateToToday = () => {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setDate(formattedDate);
  };

  const updateDateToTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = tomorrow.toLocaleDateString("en-US", options);
    setDate(formattedDate);
  };



  return (
    <section className="search-bar">
      <div className=" rounded-[360px] bg-white py-2 pr-2 pl-5 flex items-center gap-2 justify-center ">
        <div className="flex items-center  gap-6  relative">
          <div className=" w-full flex items-center gap-4 br-[1px] after:content-['|'] after:mb-2  after:text-[32px] after:text-gray_four after:font-extralight after:items-center  ">
            <Image
              alt="search any service logo"
              src="/img/Search.svg"
              width={24}
              height={24}
            />
            <Input
              placeholder="Any Service"
              className="focus:outline-none boder-none focus-visible-none text-[#0F151D] font-normal placeholder:text-black text-[16px]
              "
            />
          </div>

          <div className="w-full pl-3 flex items-center gap-4 br-[1px] after:content-['|'] after:mb-2  after:text-[32px] after:text-gray_four after:font-extralight after:items-center">
            <Image
              alt="search with location logo"
              src="/img/Location.svg"
              width={24}
              height={24}
            />
            <Input
              placeholder="Current Location"
              className="focus:outline-none boder-none  focus-visible-none placeholder:text-black text-[16px]"
            />
          </div>
          <Popover>
            <div
              className="w-full pl-6 min-w-[220px]  cursor-pointer flex items-center gap-2 br-[1px] 
             
              
           "
            >
              <PopoverTrigger asChild>
                <div className="flex gap-2">
                  <Image
                    alt="search with date logo"
                    src="/img/Tear-Off_Calendar.svg"
                    width={24}
                    height={24}
                  />

                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </div>
              </PopoverTrigger>
              <div className="z-50">
                <PopoverContent className="  rounded-xl w-auto mt-7 ml-[130px]">
                  <div className="bg-white  rounded-3xl  flex flex-col px-7 py-7  min-w-[220px]">
                    <div className="flex gap-3 mb-5">
                      <div className="bg-gray  text-[14px] rounded-[360px] cursor-pointer text-white">
                        <p className="py-[6px] px-[12px]">Any Date</p>
                      </div>
                      <div
                        className="text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white"
                        onClick={updateDateToToday}
                      >
                        <p className="py-[6px] px-[12px]">Today</p>
                      </div>
                      <div
                        className="text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white"
                        onClick={updateDateToTomorrow}
                      >
                        <p className="py-[6px] px-[12px]">Tomorrow</p>
                      </div>
                    </div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </div>
                </PopoverContent>
              </div>
            </div>
          </Popover>
          <Popover>
            <div
              className="flex items-center gap-4 cursor-pointer width-[30%] before:mb-2
            before:content-['|'] before:text-[32px]  before:text-gray_four before:font-extralight
            w-full
            "
            >
              <PopoverTrigger asChild>
                <div className="flex gap-4  min-w-[150px]   ">
                  <Image
                    alt="search with  any time  logo"
                    src="/img/Clock.svg"
                    width={24}
                    height={24}
                    className=""
                  />

                  <span className="py-4 pr-[17px] capitalize; ">
                    {fromTime && ToTime
                      ? fromTime + "-" + ToTime
                      : fromTime
                      ? fromTime
                      : "Any time"}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto mt-3 ml-[230px]  rounded-3xl">
                <div className=" flex flex-col px-7 py-7">
                  <div className="flex gap-3 mb-5  bg-white  ">
                    <div className="bg-gray  text-[14px] rounded-[360px] text-white">
                      <p className="py-[4px] px-[12px]"> Any time </p>
                    </div>
                    <div
                      className="text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white"
                      onClick={() => {
                        setFromTime("9am");
                        setToTime();
                      }}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Morning
                      </p>
                    </div>
                    <div
                      className="text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white"
                      onClick={() => {
                        setFromTime("2pm");
                        setToTime();
                      }}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Afternoon
                      </p>
                    </div>
                    <div
                      className="text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white"
                      onClick={() => {
                        setFromTime("6pm");
                        setToTime();
                      }}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Evening
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-4 min-w-[250px]">
                    <div className="pb-[6px] pt-[2px] border rounded-md border-gray_four w-full">
                      <Select onValueChange={(value) => setFromTime(value)}>
                        <SelectTrigger className="focus:outline-none  border-none">
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          {timing &&
                            timing.map((item) => (
                              <SelectItem
                                key={item.key}
                                value={item.value}
                                className="cursor-pointer"
                              >
                                {item.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="pb-[6px] pt-[2px] border rounded-md border-gray_four w-full">
                      <Select onValueChange={(value) => setToTime(value)}>
                        <SelectTrigger className="focus:outline-none border-none">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          {timing &&
                            timing.map((item) => (
                              <SelectItem
                                key={item.key}
                                value={item.value}
                                className="cursor-pointer"
                              >
                                {item.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </div>
          </Popover>
        </div>
        <div>
          <button className="text-white   min-w-[150px] min-h-[56px] flex items-center justify-center py-4 px-10 text-[16px] font-normal bg-gray  rounded-[360px] ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
7;
