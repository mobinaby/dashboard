"use client"

import Image from "next/image";


import packing from "../../public/img/Framepack.png"
import backbadge from "../../public/img/chevron-left.png";
import dress from "../../public/img/dress.png"
import dress2 from "../../public/img/dress2.png"



import { SlArrowDown } from "react-icons/sl";
import { SiSharp } from "react-icons/si";
import { LuClock } from "react-icons/lu";
import { FiImage } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxArrowBottomLeft } from "react-icons/rx";
import { FiUser } from "react-icons/fi";









const pack12 = () => {
    return(
    <>
    <div className="w-full p-4 bg-[#FFFFFF] border-gray-200 border-[1px]">
        <div className="w-full rounded-md p-4 bg-[#FFFFFF] border-[1px] border-gray-100 shadow-[0px_-2px_2px_0px] shadow-[#28293D26] flex flex-col gap-3">
        <div className="w-full  border-b-[5px] border-[#D4D4D4] flex justify-between items-center py-5 gap-[254px] ">
            <div className="w-full  flex gap-2.5  ">
              <span className=" font-bold text-2xl text-[#425466]">
                ارسال به ایران
              </span>
              <span className="  font-bold text-2xl text-[#68768A]">
                56743
              </span>
              <Image src={packing} className="w-[35px] h-[35px]" />
            </div>
            <button className="w-[206px]  rounded-md py-2 px-4 gap-2.5 bg-[#0F172A] flex justify-between">
                <span className="w-[140px] h-[24px] font-bold text-lg text-white flex justify-start">
                  بازگشت
                </span>
                <Image src={backbadge} className="w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="w-full rounded-lg border p-4 gap-8 flex flex-col border-[#DDDBDB]">
            <div className="w-full rounded border p-4 border-[#DDDBDB] shadow flex items-center justify-between  ">
                <span className="font-bold text-base text-[#5F4F69]">جزییات بسته</span>
                <SlArrowDown className="w-4 h-4" />
            </div>
            <div className="w-full rounded border p-4 shadow border-[#DDDBDB] flex flex-col gap-2.5">
                <div className="w-full gap-3 flex flex-col">
                    <div className="w-full flex gap-2.5 items-center">
                    <SiSharp className="w-4 h-4 "/>
                    <span className="font-bold text-base text-[#5F4F69]">شماره سفارش :</span>
                    <span className="font-bold text-xl text-black">123121</span>
                    </div>
                    <div className="w-full flex gap-2.5 items-center">
                    <LuClock  className="w-4 h-4 "/>
                    <span className="font-bold text-base text-[#5F4F69]">تاریخ ثبت سفارش : </span>
                    <span className="font-normal text-base"><span>1403/01/01</span>  ساعت <span>20:31</span></span>
                    </div>
                    <div className="w-full flex gap-2.5 items-center">
                    <FiImage className="w-4 h-4"/>
                    <span className="font-bold text-base text-[#5F4F69]">تصاویر کالا :</span>
                    <Image src={dress} className="w-[25px] h-[35px]"/>
                    <Image src={dress2} className="w-[25px] h-[35px]"/>
                    <Image src={dress} className="w-[25px] h-[35px]"/>
                    </div>
                    <div className="w-full h-1 bg-[#EDEDED]"></div>
                    <div className="w-full flex gap-2.5 items-center">
                    <MdOutlineFormatListBulleted className="w-4 h-4"/>
                    <span className="font-bold text-base text-[#5F4F69]">فاکتور : </span>
                    <button className="w-20 h-6 rounded-md py-1 px-3 bg-[#E93048] font-bold text-base text-white flex items-center justify-center">مشاهده</button>
                    </div>
                </div>
            </div>
            <div className="w-full rounded border py-4 px-10 flex gap-4 flex-col boeder-[#DDDBDB] shadow">
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
              <div className=" flex  items-center gap-2.5 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  تعداد کل کالا ها :                </span>
                <div className="w-[62px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#E93048] rounded-md font-bold text-2xl text-white items-center justify-center">
                  3
                </div>
              </div>
              <div className=" flex  items-center gap-2.5 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  هزینه باربری زمینی :                </span>
                <div className="w-[111px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#1E63CB] rounded-md font-bold text-2xl text-white items-center justify-center">
                45,654
                </div>
                <span className="font-semibold text-sm text-[#5F4F69]">تومان</span>

              </div>
              <div className=" flex  items-center gap-2.5 ">
                <RxArrowBottomLeft className="w-6 h-6" />
                <span className="font-bold text-base text-[#5F4F69] ">
                  {" "}
                  وزن سفارش :                </span>
                <div className="w-[144px] h-[41px] py-3 px-4 flex gap-2.5 bg-[#545555] rounded-md font-semibold text-lg text-white items-center justify-center">
                3000                 </div>
                <span className="font-semibold text-sm text-[#5F4F69]">گرم</span>
              </div>
            </div>
          </div>
            </div>
            <div className="w-full rounded border p-4 shadow border-[#DDDBDB] flex flex-col gap-2.5">
                <div className="w-full gap-10 flex items-center">
                    <div className="w-full flex gap"></div>
                <FiUser className="w-4 h-4 text-[#5F4F69]"/>
                <span className="text-sm font-bold text-[#5F4F69]">شناسه کاربری :</span>
                <span className="font-semibold text-base text-[#1E63CB]">12398123</span>
                </div>
            </div>
          </div>
        </div>
    
    </>
    )
}
export default pack12;