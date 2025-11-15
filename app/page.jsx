import { VscSearch } from "react-icons/vsc";
import CustomCarousel from "./components/home/CustomCarousel";


export default function Home() {
  return (<>
    <div className="w-full px-[18%] py-40 flex flex-col justify-center items-center overflow-y-auto">
      <CustomCarousel />
      {/* start of search bar */}
      <form className="w-3/4 flex mt-6 relative group">
        <input type="text" name="" id="" className="w-full h-11 border-2 px-6 rounded-xl focus:outline-0" placeholder="Cari Kamera/Lensa" />
        <VscSearch className="w-6 h-6 absolute right-3 top-1/5 group-hover:-rotate-6 group-hover:-translate-y-0.5 transition"/>
      </form>
      {/* end of search bar */}

      {/* sedang disewa section */}
      <div className="w-full justify-between flex items-center mt-10">
        <h1 className="text-3xl font-bold">Sedang Disewa</h1>
        <div className="text-2xl px-6 py-2 border-4 border-[#FFD966] rounded-[20px]">Lihat Lainnya</div>
      </div>

      {/* list product yang disewa */}
      <div className="w-full flex flex-row space-x-5 bg-red-50 mt-6">
        {/* card */}
        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
          {/* product image */}
          <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
          <div className="flex flex-col mt-2">
            {/* product Name */}
            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
            {/* product price */}
            <p className="font-normal mt-auto">Rp 200,000</p>
          </div>
        </div>

        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
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

      {/* section kamera */}
      <div className="w-full justify-between flex items-center mt-10">
        <h1 className="text-3xl font-bold">Kamera</h1>
        <div className="text-2xl px-6 py-2 border-4 border-[#FFD966] rounded-[20px]">Lihat Lainnya</div>
      </div>

      {/* list product Kamera */}
      <div className="w-full flex flex-row space-x-5 bg-red-50 mt-6">
        {/* card */}
        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
          {/* product image */}
          <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
          <div className="flex flex-col mt-2">
            {/* product Name */}
            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
            {/* product price */}
            <p className="font-normal mt-auto">Rp 200,000</p>
          </div>
        </div>

        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
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


      {/* section Lensa */}
      <div className="w-full justify-between flex items-center mt-10">
        <h1 className="text-3xl font-bold">Lensa</h1>
        <div className="text-2xl px-6 py-2 border-4 border-[#FFD966] rounded-[20px]">Lihat Lainnya</div>
      </div>

      {/* list product Kamera */}
      <div className="w-full flex flex-row space-x-5 bg-red-50 mt-6">
        {/* card */}
        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
          {/* product image */}
          <div className={`bg-[url('/example/example_product.png')] bg-center bg-no-repeat rounded-[9px]`}></div>
          <div className="flex flex-col mt-2">
            {/* product Name */}
            <h1 className="text-base font-bold">NIKKOR Z 40mm 1:2 </h1>
            {/* product price */}
            <p className="font-normal mt-auto">Rp 200,000</p>
          </div>
        </div>

        <div className="w-[200px] h-[300px] grid grid-rows-[4fr_2fr] p-3 bg-white shadow-sm rounded-[19px]">
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


    </div>
  </>);
}
