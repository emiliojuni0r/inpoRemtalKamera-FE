"use client";
import Image from "next/image";
import { use, useState } from "react"

export default function DetailProductPage({ params }) {
    const { id } = use(params)

    const [orderQuantity, setOrderQuantity] = useState(0)

    const handleAddQuantity = () => {
        // jangan lupa nanti tambahin kondisi untuk limit sampai jumlah stock barang
        setOrderQuantity(orderQuantity + 1)
    }

    const handleReduceQuantity = () => {
        if (orderQuantity > 0) {
            setOrderQuantity(orderQuantity - 1)
        }
    }

    const handleAddToCartButton = () => {

    }

    return (
        <div className="w-full h-fit px-[18%] py-40 flex flex-col justify-center items-center overflow-y-auto">
            <h1 className="text-5xl font-bold mr-auto">Detail Produk</h1>
            <div className="w-full grid grid-cols-[1fr_2fr] space-x-6 mt-6">
                {/* image and quantity */}
                <div className="h-[500px] shadow-md rounded-4xl p-4">
                    <Image src={'/example/example_product.png'} width={338} height={338} alt={`image`} />
                    <div className="mt-4 flex justify-between">
                        <button onClick={handleReduceQuantity} className="w-[55px] h-[55px] bg-[#FFD966] text-3xl rounded-xl cursor-pointer">-</button>
                        <div className="w-[55px] h-[55px] bg-[#FFD966] text-3xl rounded-xl flex justify-center items-center">{orderQuantity}</div>
                        <button onClick={handleAddQuantity} className="w-[55px] h-[55px] bg-[#FFD966] text-3xl rounded-xl cursor-pointer">+</button>
                    </div>

                    <button className="w-full h-[53px] rounded-[12px] mt-4 bg-[#FFD966] cursor-pointercursor-pointer">Masukkan Keranjang</button>
                </div>
                <div className="bg-white  shadow-md">
                </div>
            </div>
        </div>
    )
}