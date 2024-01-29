"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { timing } from "../../app/constants/constants";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MobileSearchbar = () => {
  const [fromTime, setFromTime] = useState();
  const [ToTime, setToTime] = useState();
  const [date, setDate] = useState(new Date());
  

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
    <>
      <div className="flex flex-col items-center mx-10">
        <div className="w-full grid  grid-cols-1 xssm:grid-cols-2  md:grid-cols-4  bg-white  rounded-2xl  ">
          <div className="w-full py-2  px-4  flex gap-2 hover:bg-slate-200 group text-white rounded-tl-2xl md:rounded-l-2xl ">
            <Image
              alt="search any service logo"
              src="/img/Search.svg"
              width={24}
              height={24}
              className="group-hover:invert"
            />
            <Input
              placeholder="Any Service"
              className="focus:outline-none boder-none focus-visible-none bg-transparent  group-hover:placeholder:text-black text-[#0F151D] font-normal w-full placeholder:text-black text-[16px]
              "
            />
          </div>
          <div className="w-full py-2  px-4  flex gap-2 hover:bg-slate-200 group   max-md:rounded-tr-2xl">
            <Image
              alt="search with location logo"
              src="/img/Location.svg"
              width={24}
              height={24}
              className="group-hover:invert"
            />
            <Input
              placeholder="Current Location"
              className="focus:outline-none boder-none  bg-transparent  group-hover:placeholder:text-black focus-visible-none w-full placeholder:text-black text-[16px]"
            />
          </div>
          <div className="w-full p-4  flex gap-2 relative hover:bg-slate-200  max-md:rounded-bl-2xl">
            <Popover>
              <PopoverTrigger asChild className="cursor-pointer">
                <div className="flex gap-2 ">
                  <Image
                    alt="search with date logo"
                    src="/img/Tear-Off_Calendar.svg"
                    width={24}
                    height={24}
                  />
                  <p className="flex gap-2 line-clamp-1">
                    {" "}
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </p>
                </div>
              </PopoverTrigger>

              <PopoverContent className="  rounded-xl w-auto mt-7 ml-[60px] xssm:ml-[160px] absolute top-[10px] left-[-200px]">
                <div className="bg-white  rounded-3xl  flex flex-col px-7 py-7  min-w-[220px]">
                  <div className="flex gap-3 mb-5">
                    <div className="bg-gray  text-[14px] rounded-[360px] cursor-pointer text-white">
                      <p className="py-[6px] px-[12px]">Any Date</p>
                    </div>
                    <div
                      className="  text-[14px] rounded-[360px] cursor-pointer bg-white border border-gray_four text-black  hover:bg-gray hover:text-white "
                      onClick={updateDateToToday}
                    >
                      <p className="py-[6px] px-[12px]">Today</p>
                    </div>
                    <div
                      className="  cursor-pointer bg-white border border-gray_four text-black text-[14px] rounded-[360px] hover:bg-gray hover:text-white "
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
            </Popover>
          </div>
          <Popover>
            <div className="w-full p-4  flex gap-2 group  hover:bg-slate-200  rounded-br-2xl md:rounded-r-2xl">
              <PopoverTrigger asChild>
                <div className="flex gap-2">
                  <Image
                    alt="search with  any time  logo"
                    src="/img/Clock.svg"
                    width={24}
                    height={24}
                  />

                  <span className=" pr-[17px] capitalize ">
                    {fromTime && ToTime   ?  fromTime +  "-" +  ToTime : fromTime ? fromTime  : "Any time" }
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto mt-5 ml-[60px] xssm:ml-9  xl:ml-[230px]  rounded-3xl">
                <div className=" flex flex-col md:px-7 px-5 py-7">
                  <div className="flex gap-3 mb-5  bg-white  max-md:justify-center ">
                    <div className="max-md:flex-col md:flex gap-3">
                      <div className="bg-gray  text-[14px] rounded-[360px] text-white">
                        <p className="py-[4px] px-[12px]"> Any time </p>
                      </div> 
                      <div
                        className="max-md:mt-3 bg-white border border-gray_four hover:bg-gray hover:text-white text-black text-[14px] rounded-[360px] "
                        onClick={() => {
                          setFromTime("9am");
                          setToTime();
                        }}
                      >
                        <p className=" py-[4px] px-[12px] cursor-pointer">
                          Morning
                        </p>
                      </div>
                    </div>
                    <div className=" gap-3 max-md:flex-col md:flex ">
                      <div
                        className="bg-white border border-gray_four text-black text-[14px] rounded-[360px] hover:bg-gray hover:text-white"
                        onClick={() =>{
                          setFromTime("2pm");
                          setToTime();
                        }}
                      >
                        <p className="py-[4px] px-[12px] cursor-pointer">
                          Afternoon
                        </p>
                      </div>
                      <div
                        className="max-md:mt-3 bg-white border border-gray_four text-black text-[14px] rounded-[360px] hover:bg-gray hover:text-white "
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
                  </div>
                  <div className="flex w-full gap-4 min-w-[250px]">
                    <div className="pb-[6px] pt-[2px] border rounded-md border-gray_four w-full">
                      <Select onValueChange={(value) => setFromTime(value)}>
                        <SelectTrigger className="focus:outline-none  border-none">
                          <SelectValue placeholder="From"  />
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
                      <Select onValueChange={(value) => setToTime(value)} >
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

        <div className="mx-auto  mt-10">
          <button className="text-white   min-w-[150px] min-h-[56px] flex items-center justify-center py-4 px-10 text-[16px] font-normal bg-gray_two  rounded-[360px] ">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSearchbar;
