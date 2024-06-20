"use client";

import Image from "next/image";
import backbadge from "../../../public/img/chevron-left.png";
import dokme from "../../../public/img/dokme-logo.png";


import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";




const job = ()=>{
    return(
        <>
        <div className="w-full p-4 bg-[#FFFFFF] border-gray-200 border-[1px]">
            <div className="w-full rounded-md p-4 bg-[#FFFFFF] border-[1px] border-gray-100 shadow-[0px_-2px_2px_0px] shadow-[#28293D26] flex flex-col gap-3">
            <div className="w-full  border-b-[5px] border-[#D4D4D4] flex justify-between py-5 gap-[254px] ">
            <div className="w-[686px]  flex gap-2.5  ">
              <span className="w-[143px] h-[24px] font-bold text-2xl text-[#425466]">
فرصت شغلی        
              </span>
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
          <div className="w-full h-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#F0F5FE] rounded-lg flex items-center p-4 gap-2">
            <div className=" w-full  flex gap-1 items-center"> <div className="flex justify-center items-center w-32 font-bold text-base">نام و نام خانوادگی:</div> 
            <input placeholder="علی رضوی" className="placeholder-black bg-transparent w-full flex items-center font-normal text-sm"/>
            </div>
            <div className=" w-full  flex gap-1 items-center"> <div className="flex justify-center items-center w-20 font-bold text-base">تاریخ ثبت:</div> 
            <input placeholder=" 1403/01/01 ساعت 20:55" className="placeholder-black bg-transparent w-full flex items-center font-normal text-sm"/>
            </div>
          </div>
          <div className="w-full h-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#F0F5FE] rounded-lg flex items-center p-4 gap-2">
            <div className=" w-full  flex gap-1 items-center"> <div className="flex justify-center items-center w-18 font-bold text-base">سن:</div> 
            <input placeholder="20 " className="placeholder-black bg-transparent w-full flex items-center font-normal text-sm"/>
            </div>
            <div className=" w-full  flex gap-1 items-center"> <div className="flex justify-center items-center w-16 font-bold text-base"> ایمیل:</div> 
            <input placeholder="ali@example.com" className="placeholder-black bg-transparent w-full flex items-center font-normal text-sm"/>
            </div>
          </div>
          <div className="w-full h-[52px] bg-gradient-to-r from-[#FFFFFF] to-[#F0F5FE] rounded-lg flex items-center p-4 gap-2.5">
           <div className="flex justify-center items-center w-30 font-bold text-base"> موضوع همکاری :</div> 
            <div className="text-black text-sm font-normal">پشتیبان سایت ( اپراتور )</div>
            
           
          </div>
          <div className="text-black font-bold text-base w-full p-1">شرح رزومه یا سایر توضیحات :</div>
          <div className="w-full h-[117px] bg-gradient-to-r from-[#FFFFFF] to-[#F0F5FE] rounded-lg flex items-center justify-center p-4 gap-2">
            <p className="font-normal text-base gap-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
          <div className="w-full h-[92px] bg-gradient-to-r from-[#FFFFFF] to-[#F0F5FE] rounded-lg flex items-center justify-center p-4 gap-2">
          <div className=" w-full  flex gap-1 items-center"> <div className="flex justify-center items-center w-18 font-bold text-base">رزومه:</div> 
            <input  className="bg-transparent w-full flex items-center font-normal text-sm"/>
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
    )
}
export default job;