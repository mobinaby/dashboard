import Image from "next/image";
import paacking from "../../../public/img/packing.png";
import backbadge from "../../../public/img/chevron-left.png";
import vector from "../../../public/img/Vector.png";


const packing = () => {
    
  
    return(   
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
                جزییات بسته                </span>
              </div>
            </div>
            <div className="w-[24px] flex justify-center items-center">
              <Image src={vector} className="w-[12px] h-[6px]" />
            </div>
          </div>
          <div className="w-full h-[43px] gap-"></div>
          </div>
        </div>
    </div>
    </>
    )
}
export default packing;