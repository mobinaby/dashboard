const selected = () => {
    return(
    <>
    <div className="flex justify-center items-center m-auto w-full h-screen bg-black">
    <div className="w-[772px] h-[562px] rounded-2xl p-8 flex gap-2.5 bg-[#F2F3F4] flex-col ">
        <div className="w-[708px] h-[334px] flex gap-8 flex-col">
            <div className="w-full h-[90px] flex gap-6 flex-col">
                <span className="w-full h-5 font-bold text-xl text-[#545555]">سفارش های انتخاب شده</span>
                <div className="w-[708px] h-[54px] rounded border-[1px] py-2 px-3 flex gap-2 bg-[#F1F5F9] border-[#CDE6FF]">
                    <div className="w-[81px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">123121</div>
                    <div className="w-[102px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">515555</div>
                    <div className="w-[99px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">877423</div>
                    <div className="w-[89px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">202666</div>
                    <div className="w-[99px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">444252</div>
                    <div className="w-[90px] h-[32px] rounded px-3 bg-[#1E63CB] font-bold text-xl text-white flex justify-center items-center">412551</div>

                </div>
            </div>
            <div className="w-full h-[90px] flex gap-6 flex-col">
                <span className="w-full h-5 font-bold text-xl text-[#545555]">سفارش های انتخاب شده</span>
                <div className="w-[708px] h-[54px] rounded border-[1px] py-2 px-3 flex gap-2 bg-[#F1F5F9] border-[#CDE6FF]">
                    <div className="w-[89px] h-[32px] rounded px-3 bg-[#E93048] font-bold text-xl text-white flex justify-center items-center">751200</div>
                    
                </div>
            </div>
            <div className="w-full h-[90px] flex gap-6 flex-col">
                <span className="w-full h-5 font-bold text-xl text-[#545555]">   سفارش های دارای نقص</span>
                <div className="w-[708px] h-[54px] rounded border-[1px] py-2 px-3 flex gap-2 bg-[#F1F5F9] border-[#CDE6FF]">
                    <div className="w-[81px] h-[32px] rounded px-3 bg-[#E67E22] font-bold text-xl text-white flex justify-center items-center">123121</div>
                    <div className="w-[99px] h-[32px] rounded px-3 bg-[#E67E22] font-bold text-xl text-white flex justify-center items-center">877423</div>

                </div>
            </div>
            <div className="w-[708px] h-[144px] flex gap-8 flex-col">
                <div className="w-full h-[37px] font-bold text-2xl text-[#545555]">آیا از درخواست خود اطمینان دارید ؟</div>
                <div className="w-full h-[75px] gap-2.5 flex ">
                    <button className="w-[349px] rounded-md px-2 bg-[#E93048] text-white text-xl font-extrabold flex justify-center items-center">تایید</button>
                    <button className="w-[349px] rounded-md px-2 border-[#545555] border-[1px] text-[#545555] text-xl font-extrabold flex justify-center items-center">لغو</button>

                </div>
            </div>
        </div>
    </div>
    </div>
    
    </>
    )
}
export default selected;