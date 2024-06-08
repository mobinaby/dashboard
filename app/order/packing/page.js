"use client";

import Image from "next/image";

import eyes from "../../../public/img/eye.png";
import clothes from "../../../public/img/tasvirlebas.png";
import qrcode from "../../../public/img/QR Code.png";
import paacking from "../../../public/img/packing.png";
import backbadge from "../../../public/img/chevron-left.png";
import vector from "../../../public/img/Vector.png";
import tick from "../../../public/img/tick.png";
import qrcode2 from "../../../public/img/QR Code2.png";
import qrcode3 from "../../../public/img/QR Code3.png";
import qrcode4 from "../../../public/img/QR Code 4.png";
import chat from "../../../public/img/Frame 1000005306.png";
import dokme from "../../../public/img/dokme-logo.png";


import { BsThreeDots } from "react-icons/bs";
import { Line } from "rc-progress";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";


import { Checkbox } from "@headlessui/react";
import { useState } from "react";

const packing = () => {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);


  return (
    <>
      <div className="w-full p-4 bg-[#FFFFFF] border-gray-200 border-[1px]">
        <div className="w-full rounded-md p-4 bg-[#FFFFFF] border-[1px] border-gray-100 shadow-[0px_-2px_2px_0px] shadow-[#28293D26] flex flex-col gap-3">
          <div className="w-full  border-b-[5px] border-[#D4D4D4] flex justify-between py-5 gap-[254px] ">
            <div className="w-[686px]  flex gap-2.5  ">
              <span className="w-[294px] h-[24px] font-bold text-2xl text-[#425466]">
                بسته بندی سفارش های بسته
              </span>
              <span className="w-[82px]  font-bold text-2xl text-[#425466]">
                65743
              </span>
              <Image src={paacking} className="w-9 h-9" />
            </div>
            <button className="w-[206px]  rounded-md py-2 px-4 gap-2.5 bg-[#0F172A] flex justify-between">
              <div className="w-[174px] h-[24px] flex gap-2.5 ">
                <span className="w-[140px] h-[24px] font-bold text-lg text-white flex justify-start">
                  بازگشت
                </span>
                <Image src={backbadge} className="w-[24px] h-[24px]" />
              </div>
            </button>
          </div>
          <div className="w-full rounded-xl border-[1px] border-[#DDDBDB] p-4 flex gap-8 flex-col">
            <div className="w-full rounded-md border-[1px] p-4 border-[#DDDBDB]  flex justify-between">
              <div className="h-[25px] w-[1082px]">
                <div className="w-[1042px] flex gap-5">
                  <span className="w-[148px] font-bold text-base text-[#5F4F69] ">
                    جزییات بسته{" "}
                  </span>
                </div>
              </div>
              <div className="w-[24px] flex justify-center items-center">
                <Image src={vector} className="w-[12px] h-[6px]" />
              </div>
            </div>
            <div className="w-full h-[43px] gap-2.5 flex">
              <button className="w-full h-[43px] rounded-md bg-[#1E63CB] font-medium text-base flex justify-center items-center text-white">
                سفارش های تهران
              </button>
              <button className="w-full h-[43px] rounded-md bg-[#E4ECF7] font-medium text-base flex justify-center items-center text-black">
                سفارش های شهرستان
              </button>
            </div>
            <div className="w-full  border-2 border-[#DDDBDB] rounded-xl  ">
              <div className="w-full h-16 border-b-2 border-[#DDDBDB] flex justify-center items-center rounded-xl">
                <div className="basis-1/8 w-[50%] h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] flex justify-center items-center ">
                  <span className="w-[64px] h-[24px] font-bold text-base text-[#222222] flex justify-center items-center">
                    ردیف{" "}
                  </span>
                </div>
                <div className="basis-1/8 w-full h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] font-bold text-base flex justify-center items-center">
                  شماره سفارش{" "}
                </div>
                <div className="basis-1/8 w-full h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] font-bold text-base flex justify-center items-center">
                  تصویر کالا{" "}
                </div>
                <div className="basis-1/8 w-full h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] font-bold text-base flex justify-center items-center">
                  بارکد{" "}
                </div>
                <div className="basis-1/8 w-full h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] font-bold text-base flex justify-center items-center">
                  وزن ( کیلوگرم ){" "}
                </div>
                <div className="basis-1/8 w-full h-16 border-[1px] border-[#DDDBDB] bg-[#F0F5FE] font-bold text-base flex justify-center items-center">
                  موجودی{" "}
                </div>
                <div className="basis-1/8 w-full h-16 font-bold border-[#DDDBDB] bg-[#F0F5FE] border-[1px] text-base flex justify-center items-center">
                  بسته بندی
                </div>
                <div className="basis-1/8 w-[60%] h-16 border-[1px] font-bold text-base bg-[#F0F5FE] flex justify-center items-center">
                  اقدام{" "}
                </div>
              </div>
              <div className="w-full h-36 border-b-2 border-[#DDDBDB] flex justify-center items-center ">
                <div className="basis-1/8 w-[50%] h-36 border-[1px] border-[#DDDBDB]  flex justify-center items-center ">
                  <span className="w-[64px] h-[24px] font-normal text-lg text-[#222222] flex justify-center items-center">
                    1{" "}
                  </span>
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-lg flex justify-center items-center ">
                  123121{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Image src={clothes} />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-base flex justify-center items-center">
                  <Image src={qrcode} className="h-26 w-40" />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-lg flex justify-center items-center">
                  3{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Checkbox
                    checked={enabled}
                    onChange={setEnabled}
                    className="group block size-6 rounded border bg-white data-[checked]:bg-blue-500 "
                  >
                    <svg
                      className="stroke-white opacity-0 group-data-[checked]:opacity-100 "
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Checkbox>{" "}
                </div>
                <div className="basis-1/8 w-full h-36 font-bold border-[#DDDBDB]  border-[1px] text-base flex justify-center items-center">
                  <div className="w-28 h-9 rounded-3xl bg-[#E93048] font-medium text-sm text-white flex items-center justify-center">
                    انجام نشده
                  </div>
                </div>
                <div className="basis-1/8 w-[60%] h-36  font-bold text-base border-[1px]  flex justify-center items-center">
                  <Image src={eyes} className="w-10 h-10" />{" "}
                </div>
              </div>
              <div className="w-full h-36 border-b-2 border-[#DDDBDB] flex justify-center items-center ">
                <div className="basis-1/8 w-[50%] h-36 border-[1px] border-[#DDDBDB]  flex justify-center items-center ">
                  <span className="w-[64px] h-[24px] font-normal text-lg text-[#222222] flex justify-center items-center">
                    2{" "}
                  </span>
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-lg flex justify-center items-center ">
                  512555{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Image src={clothes} />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-base flex justify-center items-center">
                  <Image src={qrcode2} className="h-26 w-40" />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-lg flex justify-center items-center">
                  1.75{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Checkbox
                    checked={enabled2}
                    onChange={setEnabled2}
                    className="group block size-6 rounded border bg-white data-[checked]:bg-red-600"
                  >
                    <svg
                      className="stroke-white opacity-0 group-data-[checked]:opacity-100 "
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Checkbox>{" "}
                </div>
                <div className="basis-1/8 w-full h-36 font-bold border-[#DDDBDB]  border-[1px] text-base flex justify-center items-center">
                  <div className="w-28 h-9 rounded-3xl bg-[#E93048] font-medium text-sm text-white flex items-center justify-center">
                    انجام نشده
                  </div>
                </div>
                <div className="basis-1/8 w-[60%] h-36  font-bold text-base border-[1px]  flex justify-center items-center">
                  <Image src={tick} className="w-10 h-10" />{" "}
                </div>
              </div>
              <div className="w-full h-36 border-b-2 border-[#DDDBDB] flex justify-center items-center ">
                <div className="basis-1/8 w-[50%] h-36 border-[1px] border-[#DDDBDB]  flex justify-center items-center ">
                  <span className="w-[64px] h-[24px] font-normal text-lg text-[#222222] flex justify-center items-center">
                    3{" "}
                  </span>
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-lg flex justify-center items-center ">
                  877423{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Image src={clothes} />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-base flex justify-center items-center">
                  <Image src={qrcode3} className="h-26 w-40" />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-lg flex justify-center items-center">
                  2.94{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Checkbox
                    checked={enabled3}
                    onChange={setEnabled3}
                    className="group block size-6 rounded border bg-white data-[checked]:bg-blue-500 "
                  >
                    <svg
                      className="stroke-white opacity-0 group-data-[checked]:opacity-100 "
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Checkbox>{" "}
                </div>
                <div className="basis-1/8 w-full h-36 font-bold border-[#DDDBDB]  border-[1px] text-base flex justify-center items-center">
                  <div
                    className="w-28 h-9 rounded-3xl bg-[#00BCD4] font-medium text-base
                  text-white flex items-center justify-center"
                  >
                    {" "}
                    ثبت موقث
                  </div>
                </div>
                <div className="basis-1/8 w-[60%] h-36  font-bold text-base border-[1px]  flex justify-center items-center">
                  <Image src={eyes} className="w-10 h-10" />{" "}
                </div>
              </div>
              <div className="w-full h-36 border-b-2 border-[#DDDBDB] flex justify-center items-center ">
                <div className="basis-1/8 w-[50%] h-36 border-[1px] border-[#DDDBDB]  flex justify-center items-center ">
                  <span className="w-[64px] h-[24px] font-normal text-lg text-[#222222] flex justify-center items-center">
                    4{" "}
                  </span>
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-lg flex justify-center items-center ">
                  202666{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Image src={clothes} />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB] font-bold text-base flex justify-center items-center">
                  <Image src={qrcode4} className="h-26 w-40" />{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-lg flex justify-center items-center">
                  0.5{" "}
                </div>
                <div className="basis-1/8 w-full h-36 border-[1px] border-[#DDDBDB]  font-bold text-base flex justify-center items-center">
                  <Checkbox
                    checked={enabled4}
                    onChange={setEnabled4}
                    className="group block size-6 rounded border bg-white data-[checked]:bg-blue-500 "
                  >
                    <svg
                      className="stroke-white opacity-0 group-data-[checked]:opacity-100 "
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Checkbox>{" "}
                </div>
                <div className="basis-1/8 w-full h-36 font-bold border-[#DDDBDB]  border-[1px] text-base flex justify-center items-center">
                  <div className="w-28 h-9 rounded-3xl bg-[#E93048] font-medium text-sm text-white flex items-center justify-center">
                    انجام نشده
                  </div>
                </div>
                <div className="basis-1/8 w-[60%] h-36  font-medium text-base border-[1px]  flex justify-center items-center">
                  <Image src={eyes} className="w-10 h-10" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[648px] flex gap-4 mt-3">
          <div className="w-full h-[648px] flex gap-2.5">
            <Image src={chat} />
          </div>
          <div className="w-full h-[643px] flex gap-2.5 border-gray-200 border-[1px] rounded-md mt-[2px] items-center justify-center">
            <div className="w-full h-[616px] flex gap-6 flex-col">
              <div className=" w-full h-[24px] flex justify-between p-3">
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
              <div className="w-full h-[469px] flex flex-col gap-2.5 p-5 justify-between">
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
export default packing;
