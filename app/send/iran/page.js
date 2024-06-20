"use client";
import Image from "next/image";
import airplane from "../../../public/img/SvgjsG1253.png";
import backbadge from "../../../public/img/chevron-left.png";
import vector from "../../../public/img/Vector.png";
import photo from "../../../public/img/Ellipse 9.png";
import girl from "../../../public/img/imagegirl.png";
import reza from "../../../public/img/imagereza.png"
import javad from "../../../public/img/imagejavad.png"
import sara from "../../../public/img/imagesara.png"
import boy from "../../../public/img/boyy.png"

import { RxArrowBottomLeft } from "react-icons/rx";
import { LuBookmark } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";
import dokme from "../../../public/img/dokme-logo.png";
import { BsThreeDots } from "react-icons/bs";
import { Line } from "rc-progress";
import { LuClock4 } from "react-icons/lu";

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useRef, useState } from 'react';



const order = () => {
  return (
    <>
      <div className="w-full p-4 bg-[#FFFFFF] border-gray-200 border-[1px]">
        <div className="w-full rounded-md p-4 bg-[#FFFFFF] border-[1px] border-gray-100 shadow-[0px_-2px_2px_0px] shadow-[#28293D26] flex flex-col gap-3">
          <div className="w-full  border-b-[5px] border-[#D4D4D4] flex justify-between py-5 gap-[254px] ">
            <div className="w-full  flex gap-2.5  ">
              <span className=" font-bold text-2xl text-[#425466]">
                ارسال به ایران
              </span>
              <span className="font-bold text-2xl text-[#425466]">56743</span>
              <Image src={airplane} className="w-[35px] h-[35px]" />
            </div>
            <button className="w-[206px]  rounded-md py-2 px-4 gap-2.5 bg-[#0F172A] flex justify-between">
              <span className=" font-bold text-lg text-white flex justify-start">
                بازگشت
              </span>
              <Image src={backbadge} className="w-[24px] h-[24px]" />
            </button>
          </div>

          <div className="w-full rounded-md border-[1px] p-4 border-[#DDDBDB]  flex items-center justify-between">
            <span className="font-bold text-base text-[#5F4F69] ">
              پرینت کد رهگیری بسته
            </span>
            <Image src={vector} className="w-3 h-[6px]" />
          </div>
          <div className="w-full rounded-md border-[1px] px-10 py-4 border-[#DDDBDB]">
            <div className="w-full  border-2 border-[#DDDBDB] rounded-xl  ">
              <div className="w-full h-20 border-b-2 border-[#DDDBDB] flex justify-center items-center">
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] bg-[#E4E4E4] flex justify-center items-center">
                  <span className="w-[64px] h-[24px] font-bold text-base text-[#222222] flex justify-center items-center">
                    دسته کالا
                  </span>
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-normal text-base flex justify-center items-center">
                  پوشاک ، کیف
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-normal text-base flex justify-center items-center">
                  کفش
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-normal text-base flex justify-center items-center">
                  لوازم خانگی
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-normal text-base flex justify-center items-center">
                  لوازم آرایشی
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-normal text-base flex justify-center items-center">
                  لوازم الکترونیکی
                </div>
                <div className="basis-1/7 w-full h-20 font-normal text-base flex justify-center items-center">
                  سایر
                </div>
              </div>
              <div className="w-full h-20 flex justify-center items-center">
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] bg-[#E4E4E4] flex justify-center items-center">
                  <span className="w-[64px] h-[24px] font-bold text-base text-[#222222] flex justify-center items-center">
                    {" "}
                    وزن کالا <br /> (کیلو گرم){" "}
                  </span>
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-bold text-xl text-[#545555] flex justify-center items-center">
                  1.523
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-bold text-xl text-[#545555] flex justify-center items-center">
                  0.854
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-bold text-xl text-[#545555] flex justify-center items-center">
                  0
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-bold text-xl text-[#545555] flex justify-center items-center">
                  0
                </div>
                <div className="basis-1/7 w-full h-20 border-l-2 border-[#DDDBDB] font-bold text-xl text-[#545555] flex justify-center items-center">
                  0
                </div>
                <div className="basis-1/7 w-full h-20 font-bold text-xl text-[#545555] flex justify-center items-center">
                  0.125
                </div>
              </div>
            </div>
            <div className="w-full h-[41px] flex justify-between gap-3 mt-5">
              <div className=" flex  items-center gap-2 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  تعداد سفارش :
                </span>
                <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#E67E22] rounded-md font-bold text-2xl text-white items-center justify-center">
                  7
                </div>
              </div>
              <div className=" flex  items-center gap-2 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  تعداد کل کالا ها :
                </span>
                <div className="w-[62px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#E93048] rounded-md font-bold text-2xl text-white items-center justify-center">
                  32
                </div>
              </div>
              <div className=" flex  items-center gap-2 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  کد رهگیری بسته :
                </span>
                <div className="w-[111px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#1E63CB] rounded-md font-bold text-2xl text-white items-center justify-center">
                  65743
                </div>
              </div>
              <div className=" flex  items-center gap-2 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  وزن کل :
                </span>
                <div className="w-[144px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#545555] rounded-md font-semibold text-lg text-white items-center justify-center">
                  16.54 کیلوگرم
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  rounded-md border-[1px] px-10 flex gap-4 border-[#DDDBDB] shadow-lg flex-col items-center">
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className=" w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      1
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      123121
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className="h-[51px] w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      2
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      512555
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className="h-[51px] w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      3
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      877423
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className="h-[51px] w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      4
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      202666
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      9
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3 ">
                <div className="h-[51px] w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      5
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      444252
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className="h-[51px] w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      6
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      751200
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      7
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[147px] border-b-2 py-8 flex gap-8 border-[#D4D4D4]">
              <div className=" w-full h-[83px] rounded-xl flex gap-4 shadow-2xl shadow-[#5455557A] items-center justify-between p-3">
                <div className=" w-full flex justify-between items-center">
                  <div className="w-full flex gap-8 items-center">
                    <div className="w-[47px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#2563EB] rounded-md font-bold text-2xl text-white items-center justify-center">
                      7
                    </div>
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        شماره سفارش :{" "}
                      </span>
                    </div>
                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#222222] font-bold text-[28px] text-white items-center">
                      412551
                    </div>
                  </div>
                  <div className="w-[500px] flex items-center justify-end gap-8">
                    <div className="w-[121px] h-[25px] flex gap-1  items-center ">
                      <LuBookmark className="w-3 h-3" />
                      <span className="font-bold text-base">
                        {" "}
                        تعداد کالا :{" "}
                      </span>
                    </div>

                    <div className="h-[51px] w-[166px] rounded-lg py-4 px-8 flex gap-2.5 bg-[#E93048] font-bold text-[28px] text-white items-center justify-center">
                      4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[84px] w-full flex gap-2 flex-col mt-2">
            <span className=" font-bold text-base text-[#5F4F69] pr-1">
              سفارش های انتخاب شده
            </span>
            <div className=" w-full h-14 border-[1px] rounded py-2.5 px-3 gap-2 bg-[#F1F5F9] border-[#CDE6FF] flex">
              <div className="w-[81px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                123121
              </div>
              <div className="w-[102px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                515555
              </div>
              <div className="w-[99px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                877423
              </div>
              <div className="w-[89px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                202666
              </div>
              <div className="w-[99px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                444252
              </div>
              <div className="w-[90px] h-[32px] rounded px-3 gap-2.5 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">
                412551
              </div>
            </div>
          </div>
          <div className="h-[84px] w-full flex gap-2 flex-col mt-2">
            <span className="h-[20px] font-bold text-base text-[#5F4F69] pr-1">
              سفارش های انتخاب شده
            </span>
            <div className=" w-full h-14 border-[1px] rounded py-2.5 px-3 gap-2 bg-[#F1F5F9] border-[#CDE6FF] flex">
              <div className="w-[89px] h-[32px] rounded px-3 gap-2.5 bg-[#E93048] font-bold text-xl text-white flex justify-center items-center">
                751200
              </div>
            </div>
          </div>
          <button className="h-[64px] w-full rounded-md gap-2.5 bg-[#42B42F] shadow-md font-black text-3xl flex justify-center items-center text-white">
            ثبت نهایی
          </button>
          <div className="w-full p-5 items-center justify-center flex">
            <div className="h-[55px] w-full px-5 flex gap-2.5 font-bold text-base text-[#F2F3F4] justify-between items-center bg-[#E93048] rounded-lg ">
              بایستی حداقل یک سفارش انتخاب شوند
              <RiErrorWarningFill />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 mt-3">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full h-fit p-4 flex gap-2.5 border-gray-200 border-[1px] rounded-md mt-[2px] justify-center">
              <div className="w-full flex gap-6 flex-col">
                <div className=" w-full flex justify-between p-3">
                  <span className="font-medium text-xl text-black">چت</span>
                  <div className="w-[21.59px] h-[24px] rounded border-[1px] border-[#E6E8F0] flex justify-center items-center">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex gap-1.5 ">
                    <div className="w-12 h-12 flex relative justify-start">
                      <Image src={boy} />
                      <div className="w-2.5 h-2.5 border border-white bg-[#1CC999] absolute rounded-full left-9 bottom-9"></div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                      <div className="w-full flex justify-between">
                        <span className="w-full font-semibold text-[#475569] text-base">
                          سارا
                        </span>
                        <span className="w-full font-light text-sm text-[#94A3B8] flex justify-end gap-1">
                          ساعت <span>12:20</span>
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <span className="w-full font-normal text-sm text-[#475569]">
                          سلام ! اوضاع چطوره ... ؟
                        </span>
                        <div className="w-full flex justify-end">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#F1595C] text-sm text-white font-medium items-center justify-center flex">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-[#EEF1F9]"></div>
                  <div className="w-full flex gap-1.5 ">
                    <div className="w-12 h-12 flex relative justify-start">
                      <Image src={photo} />
                      <div className="w-2.5 h-2.5 border border-white bg-[#1CC999] absolute rounded-full left-9 bottom-9"></div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                      <div className="w-full flex justify-between">
                        <span className="w-full font-semibold text-[#475569] text-base">
                          سارا
                        </span>
                        <span className="w-full font-light text-sm text-[#94A3B8] flex justify-end gap-1">
                          ساعت <span>12:20</span>
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <span className="w-full font-normal text-sm text-[#475569]">
                          سلام ! اوضاع چطوره ... ؟
                        </span>
                        <div className="w-full flex justify-end">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#F1595C] text-sm text-white font-medium items-center justify-center flex">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-[#EEF1F9]"></div>
                  <div className="w-full flex gap-1.5 ">
                    <div className="w-12 h-12 flex relative justify-start">
                      <Image src={boy} />
                      <div className="w-2.5 h-2.5 border border-white bg-[#1CC999] absolute rounded-full left-9 bottom-9"></div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                      <div className="w-full flex justify-between">
                        <span className="w-full font-semibold text-[#475569] text-base">
                          سارا
                        </span>
                        <span className="w-full font-light text-sm text-[#94A3B8] flex justify-end gap-1">
                          ساعت <span>12:20</span>
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <span className="w-full font-normal text-sm text-[#475569]">
                          سلام ! اوضاع چطوره ... ؟
                        </span>
                        <div className="w-full flex justify-end">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#F1595C] text-sm text-white font-medium items-center justify-center flex">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-[#EEF1F9]"></div>
                  <div className="w-full flex gap-1.5 ">
                    <div className="w-12 h-12 flex relative justify-start">
                      <Image src={photo} />
                      <div className="w-2.5 h-2.5 border border-white bg-[#1CC999] absolute rounded-full left-9 bottom-9"></div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                      <div className="w-full flex justify-between">
                        <span className="w-full font-semibold text-[#475569] text-base">
                          سارا
                        </span>
                        <span className="w-full font-light text-sm text-[#94A3B8] flex justify-end gap-1">
                          ساعت <span>12:20</span>
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <span className="w-full font-normal text-sm text-[#475569]">
                          سلام ! اوضاع چطوره ... ؟
                        </span>
                        <div className="w-full flex justify-end">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#F1595C] text-sm text-white font-medium items-center justify-center flex">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-[#EEF1F9]"></div>
                  <div className="w-full flex gap-1.5 ">
                    <div className="w-12 h-12 flex relative justify-start">
                      <Image src={boy} />
                      <div className="w-2.5 h-2.5 border border-white bg-[#1CC999] absolute rounded-full left-9 bottom-9"></div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                      <div className="w-full flex justify-between">
                        <span className="w-full font-semibold text-[#475569] text-base">
                          سارا
                        </span>
                        <span className="w-full font-light text-sm text-[#94A3B8] flex justify-end gap-1">
                          ساعت <span>12:20</span>
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <span className="w-full font-normal text-sm text-[#475569]">
                          سلام ! اوضاع چطوره ... ؟
                        </span>
                        <div className="w-full flex justify-end">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#F1595C] text-sm text-white font-medium items-center justify-center flex">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[800px] p-4 flex gap-2.5 border-gray-200 border-[1px] rounded-md mt-[2px]  justify-center">
              <div className="w-full flex gap-1 flex-col">
                <div className=" w-full flex justify-between p-3">
                  <span className="font-medium text-xl text-black">
                    افراد آنلاین
                  </span>
                  <div className="w-[21.59px] h-[24px] rounded border-[1px] border-[#E6E8F0] flex justify-center items-center">
                    <BsThreeDots />
                  </div>
                </div>
                
                <div className="w-full flex justify-between p-5">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-5">
        <SwiperSlide><div className="w-full flex justify-between items-center gap-3 px-10">
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={girl} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        الناز
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={reza} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        رضا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={javad} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        جواد
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={sara} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        سارا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                </div></SwiperSlide>
        <SwiperSlide><div className="w-full flex justify-between items-center gap-3 px-10">
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={girl} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        الناز
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={reza} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        رضا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={javad} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        جواد
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={sara} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        سارا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                </div></SwiperSlide>
        <SwiperSlide><div className="w-full flex justify-between items-center gap-3 px-10">
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={girl} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        الناز
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={reza} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        رضا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={javad} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        جواد
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={sara} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        سارا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                </div></SwiperSlide>
        <SwiperSlide><div className="w-full flex justify-between items-center gap-3 px-10">
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={girl} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        الناز
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={reza} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        رضا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={javad} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        جواد
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="w-[82px] flex flex-col gap-3 justify-center items-center">
                    <Image className="w-12 h-12" src={sara} />
                    <div className="w-full gap-2 flex justify-center">
                      <span className="font-normal text-sm text-[#475569]">
                        سارا
                      </span>
                      <div className="w-[57px] h-5 px-2 bg-[#F0F6FF] flex justify-center items-center rounded-full font-bold text-xs text-[#283C63]">
                        پشتیبان
                      </div>
                    </div>
                    <div className="w-[100px] flex items-center justify-center px-2 gap-1">
                      <span className="font-normal text-xs text-[#94A3B8]">
                        22:54 pm
                      </span>
                      <LuClock4 className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                </div></SwiperSlide>
      </Swiper>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 flex gap-2.5 border-gray-200 border-[1px] rounded-md mt-[2px]  justify-center">
            <div className="w-full flex gap-6 flex-col">
              <div className=" w-full flex justify-between p-3">
                <span className="font-medium text-xl text-black">
                  وضعیت کلی
                </span>
                <div className="w-[21.59px] h-[24px] rounded border-[1px] border-[#E6E8F0] flex justify-center items-center">
                  <BsThreeDots />
                </div>
              </div>
              <div className="w-full h-[75px] p-4 flex gap-2.5 justify-between">
                <button className="w-full h-[43px] rounded-md py-2.5 px-4 bg-[#1E63CB] font-medium text-base flex justify-center items-center text-white">
                  در خارج
                </button>
                <button className="w-full h-[43px] rounded-md py-2.5 px-4 bg-[#E4ECF7] font-medium text-base flex justify-center items-center text-black">
                  در ایران{" "}
                </button>
                <button className="w-full h-[43px] rounded-md py-2.5 px-4 bg-[#E4ECF7] font-medium text-base flex justify-center items-center text-black">
                  بکاپ{" "}
                </button>
              </div>
              <div className="w-full flex flex-col gap-32 p-5 justify-between">
                <div className="w-full h-[41px]  ">
                  <div className="flex justify-between p-2">
                    <span className=" font-medium text-sm text-[#425466]">
                      بررسی سفارش
                    </span>
                    <span className="font-bold text-base text-[#425466]">
                      60%
                    </span>
                  </div>
                  <Line percent={60} strokeWidth={3} strokeColor="#E93048" />
                </div>
                <div className="w-full h-[41px] ">
                  <div className="flex justify-between p-2">
                    <span className=" font-medium text-sm text-[#425466]">
                      {" "}
                      ارسال به انبار
                    </span>
                    <span className="font-bold text-base text-[#425466]">
                      20%
                    </span>
                  </div>
                  <Line percent={20} strokeWidth={3} strokeColor="#0496FF" />
                </div>
                <div className="w-full h-[41px] ">
                  <div className="flex justify-between p-2">
                    <span className=" font-medium text-sm text-[#425466]">
                      {" "}
                      فاکتور باربری
                    </span>
                    <span className="font-bold text-base text-[#425466]">
                      10%
                    </span>
                  </div>
                  <Line percent={10} strokeWidth={3} strokeColor="#6665DD" />
                </div>
                <div className="w-full h-[41px] ">
                  <div className="flex justify-between p-2">
                    <span className=" font-medium text-sm text-[#425466]">
                      {" "}
                      تحویل به کارگو
                    </span>
                    <span className="font-bold text-base text-[#425466]">
                      10%
                    </span>
                  </div>
                  <Line percent={10} strokeWidth={3} strokeColor="#04E762" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[438px] rounded-md p-4 flex gap-6 border-[#28293D33] border-[1px] mt-3 flex-col">
          <div className="w-full h-[32px] flex justify-between">
            <span className="w-[100px] font-medium text-xl text-black">
              لیست یادآور
            </span>
            <button className="w-[116px] h-[32px] rounded-sm border-[1px] px-8 py-1 border-[#E6E8F0]">
              <div className="w-[52px] h-[24px] flex gap-1 justify-between items-center">
                <FaPlus className="w-3 h-3" />
                <span className="font-medium text-sm text-black ">افزودن</span>
              </div>
            </button>
          </div>
          <div className="w-full h-[300px] flex flex-col ">
            <div className="h-[24px] flex gap-4 items-center mt-3 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] h-[13px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
            <div className="w-full border-[1px] border-[#EEF1F9] mt-6"></div>
            <div className="h-[24px] flex gap-4 items-center mt-4 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] h-[13px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
            <div className="w-full border-[1px] border-[#EEF1F9] mt-6"></div>
            <div className="h-[24px] flex gap-4 items-center mt-4 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
            <div className="w-full border-[1px] border-[#EEF1F9] mt-6"></div>
            <div className="h-[24px] flex gap-4 items-center mt-4 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
            <div className="w-full border-[1px] border-[#EEF1F9] mt-6"></div>
            <div className="h-[24px] flex gap-4 items-center mt-4 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
            <div className="w-full border-[1px] border-[#EEF1F9] mt-6"></div>
            <div className="h-[24px] flex gap-4 items-center mt-4 justify-between">
              <div className="flex gap-2.5 w-full items-center">
                <input
                  className="w-[24px] rounded border-[1px] border-[#D1D1D6]"
                  type="checkbox"
                ></input>
                <div className="w-[1036px] font-light text-sm text-[#475569]">
                  بازگشت سفارش 219941
                </div>
              </div>

              <div className="w-[52px] flex gap-2">
                <RiDeleteBinLine className="w-[20px] h-[20px] text-[#475569]" />
                <PiNotePencil className="w-[20px] h-[20px] text-[#475569]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[56px] rounded-md p-4 flex gap-4 border-[1px] border-[#28293D33] mt-4 items-center justify-between">
          <div className="w-full h-6 flex">
            <div className="w-full h-[24px] flex gap-2.5 items-center">
              <span className="w-[68px] font-medium text-sm text-black">
                پنل مدیریت
              </span>
              <Image src={dokme} className="w-[75px]" />
            </div>
            <span className="w-[120px] font-normal text-sm text-[#64748B] flex justify-center items-center">
              2024© dokme
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default order;
