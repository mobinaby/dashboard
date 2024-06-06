import Image from "next/image";
import recycle from "../../../public/img/reCAPTCHA (1).png";
import mainimg from "../../../public/img/Frame 1000005659.png";
const loginform = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/2  flex justify-center items-center">
          <div className=" w-[440px] h-[669px] gap-4 ">
            <div className="w-[440px] h-[51px] gap-2.5 flex items-center">
              <div className="w-[145px] h-[51px] gap-2.5 ">
                <span className="w-[145px] h-[51px] font-black text-2xl text-[#68768A] ">
                  پنل مدیریت
                </span>
              </div>
            </div>
            <div className="w-[440] h-[597px] rounded-md gap-5 py-11 px-10 bg-[#FFFFFF] shadow-md shadow-[#00000040]  ">
              <div className="w-[356px] h-[73px] gap-4">
                <div className="w-[356px] h-[72px] gap-4 flex justify-center">
                  <span className="w-[48px] h-[32px] gap-4 font-bold text-2xl text-[#0F172A] ">
                    ورود
                  </span>
                </div>
                <div className="w-[356px] h-[24px] gap-4 ">
                  <span className="w-[356px] h-[24px] font-light text-base">
                    انتخاب نمایید :
                  </span>
                </div>
              </div>
              <div className="flex w-[356px] h-[43px] gap-2">
                <button className="w-[173px] h-[43px] rounded-md px-4 py-2.5 bg-[#1E63CB] ">
                  <span className="w-[101px] h-[23px] font-medium text-sm text-[#FFFFFF]">
                    ورود با نام کاربری
                  </span>
                </button>
                <button className="w-[173px] h-[43px] rounded-md px-4 py-2.5 bg-[#E4ECF7]">
                  <span className="w-[101px] h-[23px] font-medium text-sm text-[#425466]">
                    {" "}
                    ورود با شماره موبایل{" "}
                  </span>
                </button>
              </div>
              <div className="w-[356px] h-[80px] mt-5 ml-1 gap-2">
                <span className="w-[55px] h-[24px] font-bold text-sm text-[#425466]">
                  نام کاربری
                </span>
                <div className="w-[356px] h-[48px] gap-2.5 ">
                  <input
                    className=" w-[356px] h-[48px] rounded-[4px] border-[1px] px-2 gap-2.5 bg-[#F1F1F1] border-[#D5D5D5] placeholder:text-center"
                    placeholder="وارد نمایید ..."
                  ></input>
                </div>
              </div>
              <div className="w-[356px] h-[80px] mt-5 ml-1 gap-2">
                <span className="w-[55px] h-[24px] font-bold text-sm text-[#425466]">
                  رمز عبور{" "}
                </span>
                <div className="w-[356px] h-[48px] gap-2.5 ">
                  <input
                    className=" w-[356px] h-[48px] rounded-[4px] border-[1px] px-2 gap-2.5 bg-[#F1F1F1] border-[#D5D5D5] placeholder:text-center"
                    placeholder="وارد نمایید ..."
                  ></input>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[302px] h-[76px] mt-5 rounded-[3px] border-[1px] border-[#D3D3D3] flex justify-between items-center bg-[#F9F9F9] shadow-lg">
                  <Image src={recycle} className="w-[66px] h-[62px] " />
                  <div className="w-[130px] h-[28px] flex items-center ">
                    <span className="w-[88.35px] h-[10.64px] text-[#000000] font-medium text-xs">
                      I’m not a robot
                    </span>
                    <div className="w-[24px] h-[24px] m-0.5 text-[#FFFFFF] ">
                      <input
                        type="checkbox"
                        className="w-[28px] h-[28px]"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-10">
                <button className="w-[356px] h-[48px] rounded-[4px] py-3 px-32 bg-[#1E63CB] flex gap-2.5 justify-center text-[#FFFFFF] font-normal text-sm">
                  تایید
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-max-[100vh] ">
          {" "}
          <Image src={mainimg} className="h-[100vh]" />
        </div>
      </div>
    </>
  );
};
export default loginform;
