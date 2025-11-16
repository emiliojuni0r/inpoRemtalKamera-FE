"use client";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

export default function productPage() {
    const [viewProductDisplayGrid, setViewProductDisplayGrid] = useState(true);


    const handleToggleDisplayProduct = () => {
        setViewProductDisplayGrid(!viewProductDisplayGrid);
        console.log(viewProductDisplayGrid)
    }

    return (
        <div className="w-full h-fit px-[18%] py-40 flex flex-col justify-center items-center overflow-y-auto">
            {/* start of search bar */}
            <form className="w-3/4 flex relative group">
                <input type="text" name="" id="" className="w-full h-11 border-2 px-6 rounded-xl focus:outline-0" placeholder="Cari Kamera/Lensa" />
                <VscSearch className="w-6 h-6 absolute right-3 top-1/5 group-hover:-rotate-6 group-hover:-translate-y-0.5 transition" />
            </form>
            {/* end of search bar */}

            {/* list categories */}
            <div className="max-w-[80%] flex flex-wrap justify-around space-x-6 space-y mt-8">
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Kamera</div>
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Lensa</div>
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Tripod</div>
            </div>

            {/* list subcategories */}
            <div className="max-w-[80%] flex flex-wrap justify-around space-x-6 space-y mt-8">
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Kamera</div>
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Lensa</div>
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Tripod</div>
                <div className="text-2xl border-4 border-[#FFD966] rounded-[20px] w-[200px] h-[60px] flex justify-center items-center font-bold flex-none">Tripod</div>
            </div>

            {/* toggle view */}
            <button onClick={handleToggleDisplayProduct} className="rounded-[12px] w-[80px] h-[55px] flex justify-center items-center bg-white shadow-md ml-auto mt-8 cursor-pointer hover:contrast-95 active:contrast-90">
                {viewProductDisplayGrid ? (
                    <FaList className="w-10 h-10 text-[#FFD966]" />
                ) : (
                    <IoGrid className="w-10 h-10 text-[#FFD966]" />
                )}
            </button>

            {/* display grid */}
            {viewProductDisplayGrid && (
                <div className="grid grid-cols-5 space-x-6 space-y-4 items-start mt-6">
                    <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-md rounded-[19px]">
                        {/* product image */}
                        <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
                        <div className="flex flex-col mt-2">
                            {/* product Name */}
                            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
                            {/* product price */}
                            <p className="font-normal mt-auto">Rp 200,000</p>
                        </div>
                    </div>
                    <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-md rounded-[19px]">
                        {/* product image */}
                        <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
                        <div className="flex flex-col mt-2">
                            {/* product Name */}
                            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
                            {/* product price */}
                            <p className="font-normal mt-auto">Rp 200,000</p>
                        </div>
                    </div>
                    <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-md rounded-[19px]">
                        {/* product image */}
                        <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
                        <div className="flex flex-col mt-2">
                            {/* product Name */}
                            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
                            {/* product price */}
                            <p className="font-normal mt-auto">Rp 200,000</p>
                        </div>
                    </div>

                </div>
            )}

            {!viewProductDisplayGrid && (
                <div className="w-full flex flex-col space-y-4 mt-6">
                    <div className="w-full h-[190px] bg-white shadow-md rounded-3xl grid grid-cols-[2fr_8fr] px-4 py-4">
                        {/* product image */}
                        <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-3xl`}></div>
                        <div className="flex flex-col">
                            {/* product name */}
                            <h1 className="text-2xl font-bold">NIKKOR Z 40mm 1:2 </h1>
                            <div className="w-full mt-auto flex justify-between">
                                <p className="text-lg font-bold">Stok : 2</p>
                                <p className="text-lg font-bold">Rp 200,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}