const check = () =>{
    return(
        <>
        <div className="flex justify-center items-center m-auto w-full h-screen bg-black">
            <div className="w-[772px] h-[784px] rounded-2xl p-8 gap-2.5 flex  justify-center bg-[#F2F3F4]">
                <div className="w-[708px] h-[720px] flex flex-col gap-8">
                    <div className="flex justify-between items-center gap-2.5 ">
                        <div className="bg-[#1E63CB] rounded-full w-[143px] h-[41px] flex justify-center text-white items-center font-bold text-base">
                            <span>پرینت فاکتور ها</span>
                        </div>
                        <div className="bg-[#DBDBDB] w-[464px] h-[1px] flex justify-center items-center"></div>
                        <div className="flex gap-3 font-bold text-base">
                            <input type="checkbox" className="w-6 h-6"/>
                            <span>تایید</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2.5 ">
                        <div className="bg-[#1E63CB] rounded-full w-[263px] h-[41px] flex justify-center text-white items-center font-bold text-base">
                            <span> بررسی کادوپیچ شدن تمامی کالا ها </span>
                        </div>
                        <div className="bg-[#DBDBDB] w-[344px] h-[1px] flex justify-center items-center"></div>
                        <div className="flex gap-3 font-bold text-base">
                            <input type="checkbox" className="w-6 h-6"/>
                            <span>تایید</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2.5 ">
                        <div className="bg-[#1E63CB] rounded-full w-[177px] h-[41px] flex justify-center text-white items-center font-bold text-base">
                            <span>  بسته بندی تمامی کالا</span>
                        </div>
                        <div className="bg-[#DBDBDB] w-[430px] h-[1px] flex justify-center items-center"></div>
                        <div className="flex gap-3 font-bold text-base">
                            <input type="checkbox" className="w-6 h-6"/>
                            <span>تایید</span>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center gap-2.5 ">
                        <div className="bg-[#1E63CB] rounded-full w-[299px] h-[41px] flex justify-center text-white items-center font-bold text-base">
                            <span>  افزودن فاکتورهای سفارش به بسته بندی</span>
                        </div>
                        <div className="bg-[#DBDBDB] w-[308px] h-[1px] flex justify-center items-center"></div>
                        <div className="flex gap-3 font-bold text-base">
                            <input type="checkbox" className="w-6 h-6"/>
                            <span>تایید</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2.5 ">
                        <div className="bg-[#1E63CB] rounded-full w-[266px] h-[41px] flex justify-center text-white items-center font-bold text-base">
                            <span> زمان جمع آوری مرسوله پست</span>
                        </div>
                        <div className="bg-[#DBDBDB] w-[231px] h-[1px] flex justify-center items-center"></div>
                        <div className="w-[231px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-base text-black justify-center items-center">
                        چهارشنبه 12 اردیبهشت 08 تا 14 
                        </div>
                    </div>
                    <div className="w-full h-[170px] flex justify-between gap-2.5">
                        <div className="w-[201px] h-[41px] flex gap-2.5 items-center">
                            <div className="w-[126px] h-[41px] justify-center items-center rounded-full bg-[#1E63CB] flex gap-2.5 font-bold text-base text-white">رهگیری پست</div>
                            <div className="w-[65px] h-[1px] bg-[#DBDBDB]"></div>
                        </div>
                        <div className="w-[497px] h-[170px] gap-2.5 flex flex-col">
                            <div className="w-full h-[50px] gap-2.5 flex">
                                <div className="w-[200px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-[14px] text-[#707B8B] justify-center items-center">
                                    https://example.com/dasdad</div>
                                    <div className="w-[287px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-base text-[#707B8B] justify-center items-center">
                                    123412341234123412341234</div>
                            </div>
                            <div className="w-full h-[50px] gap-2.5 flex">
                                <div className="w-[200px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-[14px] text-[#707B8B] justify-center items-center">
                                    https://example.com/dasdad</div>
                                    <div className="w-[287px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-base text-[#707B8B] justify-center items-center">
                                    123412341234123412341234</div>
                            </div>
                            <div className="w-full h-[50px] gap-2.5 flex">
                                <div className="w-[200px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-[14px] text-[#707B8B] justify-center items-center truncate">
                                    https://example.com/dasdad</div>
                                    <div className="w-[287px] h-[50px] rounded border-[1px] border-[#CDE6FF] bg-[#F1F5F9] flex gap-3 font-bold text-base text-[#707B8B] justify-center items-center">
                                    123412341234123412341234</div>
                            </div>
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
export default check; 