import Image from "next/image";
import { GoHome } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { PiReceipt } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdChatBubbleOutline } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FiLayers } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { BiBarChartSquare } from "react-icons/bi";
import { CgCalculator } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { SlEnergy } from "react-icons/sl";
import { PiWrenchLight } from "react-icons/pi";
import { CiCloud } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import IconExit from"../../../../public/img/adamfazayi.png"
import { RiAccountPinCircleLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <>
      <div className="flex items-start justify-start w-full h-fit">
        <div className="w-[230px] h-fit bg-[#FFFFFF] border-l-[1px] border-l-[#D4D4D4] flex-col flex items-center p-4">
          <div className="bg-[#F0F5FE] w-[198px] h-[40px] rounded-[10px] gap-4 py-[0px] px-[10px] flex justify-between items-center mt-5">
            <span className="text-[16px] text-[#222222] items-start leading-[25.33px] font-[800]">
              منو مدیریت
            </span>
            <HiMenuAlt3 className="text-[#283C63]" />
          </div>

          <div className="group cursor-pointer">
             <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                داشبورد
              </span>
            </div>
            <GoHome className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>
         
         <div className="group cursor-pointer">
         <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <div className="w-[28px] h-[28px] rounded-[56px] bg-[#545555] group-hover:bg-[#6AA6FF]">
                <span className="text-white text-[14px] font-[700] leading-[21.94px] flex justify-center items-center m-auto w-full h-full group-hover:text-white">
                  14
                </span>
              </div>
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                سفارش
              </span>
            </div>
            <PiReceipt className="size-6 text-[#545555] group-hover:text-white" />
          </div>
         </div>

         <div className="group cursor-pointer">
            <div className="group cursor-pointer">
          <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <div className="w-[28px] h-[28px] rounded-[56px] bg-[#545555] group-hover:bg-[#6AA6FF]">
                <span className="text-white text-[14px] font-[700] leading-[21.94px] flex justify-center items-center m-auto w-full h-full">
                  5
                </span>
              </div>
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                تیکت
              </span>
            </div>
            <FaRegCommentDots className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>
         </div>

         <div className="group cursor-pointer">
         <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                فروشگاه
              </span>
            </div>
            <LuShoppingBag className="size-6 text-[#545555] group-hover:text-white" />
          </div>
         </div>

          

          <div className="group cursor-pointer">
          <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <div className="w-[28px] h-[28px] rounded-[56px] bg-[#545555] group-hover:bg-[#6AA6FF]">
                <span className="text-white text-[14px] font-[700] leading-[21.94px] flex justify-center items-center m-auto w-full h-full group-hover:text-white">
                  0
                </span>
              </div>
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                نظرات
              </span>
            </div>
            <RiAccountPinCircleLine className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                صفحه
              </span>
            </div>
            <FiLayers className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                مالی
              </span>
            </div>
            <FiDollarSign className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
          <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                آمار
              </span>
            </div>
            <BiBarChartSquare className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                ماشین حساب
              </span>
            </div>
            <CgCalculator className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                کاربر
              </span>
            </div>
            <FiUser className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          
          <div className="group cursor-pointer">
             <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                لندیگ
              </span>
            </div>
            <SlEnergy className="size-6 text-[#545555] group-hover:text-white" />
          </div>
          </div>
         
         <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                مدیریت
              </span>
            </div>
            <PiWrenchLight className="size-8 text-[#545555] group-hover:text-white" />
          </div>
         </div>
          
          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                بکاپ
              </span>
            </div>
            <CiCloud className="size-9 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-2 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                پیامک و پیغام
              </span>
            </div>
            <CiMobile2 className="size-9 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-[198px] h-[45.81px] rounded-md bg-white gap-4 py-0 px-8 flex justify-between items-center mt-5 group-hover:bg-[#1E63CB]" >
            <div className="w-[142px] h-[28px] flex justify-start items-center">
              <span className="text-[#545555] text-[16px] leading-[24.26px] font-[700] mr-2 group-hover:text-white">
                تنظیمات
              </span>
            </div>
            <IoSettingsOutline className="size-8 text-[#545555] group-hover:text-white" />
          </div>
          </div>

          
          
          <div className="bg-[#0F172A] w-full h-[173px] pt-[4.5625rem] pr-[1rem] pl-[1.25rem] pb-[1rem] gap-2.5 rounded-2xl mt-32 flex-col flex justify-center items-center">
          <Image src={IconExit} className="-mt-52"></Image>
            <div className="flex justify-center items-center">
              <span className="text-white text-[19px] font-[700]">
                پنل مدریریت
              </span>
              <span className="text-red-600 text-[19px] font-[700] mr-2">
                دکمه
              </span>
            </div>
            <div className="items-center flex justify-center ">
            <div className="bg-white w-[168px] h-[40px] rounded px-3 py-4 flex justify-center items-center gap-2 cursor-pointer">
                <span className="text-[#0F172A] text-[14px] font-[500] leading-[16px]">خروج</span>
                <IoExitOutline className="text-[#283C63] size-5"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
