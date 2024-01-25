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

const Searchbar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();

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

  const updateTimeToMorning = () => {
    setTime("9am");
  };

  const updateTimeToAfternoon = () => {
    setTime("2pm");
  };

  const updateTimeToEvening = () => {
    setTime("6pm");
  };

  const selectedTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <section className="search-bar">
      <div className=" rounded-[360px] bg-white py-2 pr-2 pl-5 flex items-center gap-2 justify-center ">
        <div className="flex items-center  gap-6  relative">
          <div className=" w-full flex items-center gap-4 br-[1px] after:content-['|'] after:text-[32px] after:text-gray_four after:font-extralight  ">
            <Image
              alt="search any service logo"
              src="/img/Search.svg"
              width={24}
              height={24}
            />
            <Input
              placeholder="Any Service"
              className="focus:outline-none boder-none focus-visible-none placeholder:text-black text-[16px]
              "
            />
          </div>

          <div className="w-full pl-3 flex items-center gap-4 br-[1px] after:content-['|'] after:text-[32px] after:text-gray_four after:font-extralight">
            <Image
              alt="search with location logo"
              src="/img/Location.svg"
              width={24}
              height={24}
            />
            <Input
              placeholder="Current Location"
              className="focus:outline-none boder-none focus-visible-none placeholder:text-black text-[16px]"
            />
          </div>
          <Popover>
            <div
              className="w-full pl-6 min-w-[220px]  cursor-pointer flex items-center gap-2 br-[1px] 
             
              
           "
            >
              <PopoverTrigger asChild>
                <Image
                  alt="search with date logo"
                  src="/img/Tear-Off_Calendar.svg"
                  width={24}
                  height={24}
                />
              </PopoverTrigger>

              <div className="z-50">
                {date ? format(date, "PPP") : <span>Pick a date</span>}

                <PopoverContent className="w-auto mt-10 ml-40">
                  <div className="bg-white rounded-[360px]  flex flex-col px-7 py-7">
                    <div className="flex gap-3 mb-5">
                      <div className="bg-gray  text-[14px] rounded-[360px] text-white">
                        <p className="py-[6px] px-[12px]">Any date </p>
                      </div>
                      <div
                        className="bg-gray  text-[14px] rounded-[360px] cursor-pointer text-white"
                        onClick={updateDateToToday}
                      >
                        <p className="py-[6px] px-[12px]">Today</p>
                      </div>
                      <div
                        className="bg-gray  text-[14px] rounded-[360px] text-white cursor-pointer"
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
              className="flex items-center gap-4 cursor-pointer width-[30%]
            // before:content-['|'] before:text-[32px] before:text-gray_four before:font-extralight
            w-full
            "
            >
              <PopoverTrigger asChild>
                <Image
                  alt="search with  any time  logo"
                  src="/img/Clock.svg"
                  width={24}
                  height={24}
                  className=""
                />
              </PopoverTrigger>

              <span className="py-4 pr-[17px] capitalize; ">
                {time ? time : <span>Any time</span>}
              </span>
              <PopoverContent className="w-auto mt-10 ml-[300px] rounded-xl">
                <div className=" flex flex-col px-7 py-7">
                  <div className="flex gap-3 mb-5 bg-white  ">
                    <div className="bg-gray  text-[14px] rounded-[360px] text-white">
                      <p className="py-[4px] px-[12px]"> Any time</p>
                    </div>
                    <div
                      className="bg-white border border-gray_four text-black text-[14px] rounded-[360px] "
                      onClick={updateTimeToMorning}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Morning
                      </p>
                    </div>
                    <div
                      className="bg-white border border-gray_four text-black text-[14px] rounded-[360px] "
                      onClick={updateTimeToAfternoon}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Afternoon
                      </p>
                    </div>
                    <div
                      className="bg-white border border-gray_four text-black text-[14px] rounded-[360px] "
                      onClick={updateTimeToEvening}
                    >
                      <p className="py-[4px] px-[12px] cursor-pointer">
                        Evening
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-4 min-w-[250px]">
                    <div className="px-4 py-3 border rounded-md border-gray_four w-full">
                      <Select
                      
                      
                      >
                        <SelectTrigger className="focus:outline-none  border-none">
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10am">10am</SelectItem>
                          <SelectItem value="11am">11am</SelectItem>
                          <SelectItem value="12pm">12am</SelectItem>
                          <SelectItem value="2pm">2pm</SelectItem>
                          <SelectItem value="3pm">3pm</SelectItem>
                          <SelectItem value="4pm">4pm</SelectItem>
                          <SelectItem value="5pm">5pm</SelectItem>
                          <SelectItem value="6pm">6pm</SelectItem>
                          <SelectItem value="7pm">7pm</SelectItem>
                          <SelectItem value="8pm">8pm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="px-4 py-3 border rounded-md border-gray_four w-full">
                      <Select
                    
                      >
                        <SelectTrigger className="focus:outline-none border-none">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10am">10am</SelectItem>
                          <SelectItem value="11am">11am</SelectItem>
                          <SelectItem value="12pm">12am</SelectItem>
                          <SelectItem value="2pm">2pm</SelectItem>
                          <SelectItem value="3pm">3pm</SelectItem>
                          <SelectItem value="4pm">4pm</SelectItem>
                          <SelectItem value="5pm">5pm</SelectItem>
                          <SelectItem value="6pm">6pm</SelectItem>
                          <SelectItem value="7pm">7pm</SelectItem>
                          <SelectItem value="8pm">8pm</SelectItem>
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
