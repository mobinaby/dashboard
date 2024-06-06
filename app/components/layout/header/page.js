import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";
import { Span } from "next/dist/trace";
import { GrLineChart } from "react-icons/gr";
import logoDokmeh from "../../../../public/img/dokme-logo.png";
import avatar from "../../../../public/img/Frame 1000005167.png";

const Header = () => {
  return (
    <>
      <div className="h-[96px] flex border-[#D4D4D4] border-1 border-b justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="flex items-center mr-6">
            <div className=" flex items-center justify-center w-[50px] h-[50px] bg-[#F0F5FE] rounded-full">
              <FiSearch size={"30px"} />
            </div>
            <div className=" flex items-center justify-center relative w-[50px] h-[50px] mr-5 bg-[#F0F5FE] rounded-full">
              <IoIosNotificationsOutline size={"30px"} />
            </div>
            <div className="flex items-center justify-center absolute top-[10px] right-[160px] w-[25px] h-[25px] border-[1px] border-white bg-red-600 rounded-full text-white">
              <span>7</span>
            </div>
            <div className="flex items-center justify-center w-[50px] h-[50px] mr-5 bg-[#F0F5FE] rounded-full">
              <HiOutlineMail size={"30px"} />
            </div>
            <div className="flex items-center justify-center absolute top-[10px] right-[90px] w-[25px] h-[25px] border-[1px] border-white bg-red-600 rounded-full text-white">
              <span>8</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-24 font-bold text-[#545555]">
              <span>سه شنبه ,</span>
              <span>26 </span>
              <span>آبان </span>
              <span>1402 </span>
            </div>
            <div className="mr-5 text-[#545555] font-thin">
              <span>ساعت</span>
            </div>
            <div className="flex items-center justify-center bg-[#545555] text-white mr-3 rounded-md w-[56px] h-[25px]">
              <span>22:30</span>
            </div>
            <div className="mr-2 font-bold text-[#545555]">
              <span>تهران</span>
            </div>
          </div>
          <div className="flex items-center mr-12">
            <GrLineChart size={"15px"} />
            <div className="mr-6 font-bold text-[#545555]">
              <span>قیمت لحظه ای لیر :</span>
            </div>
            <div className="flex items-center justify-center bg-[#E93048] text-white mr-3 rounded-md w-[100px] h-[30px] gap-1">
              <span>تومان</span>
              <span>1795</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex flex-col justify-center text-[#545555] font-bold ml-6">
              <span>امیرسامان بنی اسدی</span>
            </div>
            <div className="flex justify-end ml-6">
              <div className="bg-[#F0F6FF] text-[#283C63] w-[65px] h-[30px] rounded-3xl font-bold flex justify-center mt-2">
                <span>مدیر کل</span>
              </div>
            </div>
          </div>
          <div className="w-[48px] h-[48ox] ml-9">
            <Image src={avatar} />
          </div>
          <div className="w-[107px] h-[31px] ml-8">
            <Image src={logoDokmeh} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;