import { VscSearch } from "react-icons/vsc";

export default function productPage() {
    return (
        <div className="w-full px-[18%] py-40 flex flex-col justify-center items-center overflow-y-auto">
            {/* start of search bar */}
            <form className="w-3/4 flex relative group">
                <input type="text" name="" id="" className="w-full h-11 border-2 px-6 rounded-xl focus:outline-0" placeholder="Cari Kamera/Lensa" />
                <VscSearch className="w-6 h-6 absolute right-3 top-1/5 group-hover:-rotate-6 group-hover:-translate-y-0.5 transition"/>
            </form>
            {/* end of search bar */}

            {/* list categories */}
            <div className="grid grid-cols-4 space-x-2">
                <div className="text-2xl border">Kamera</div>
                <div>Kamera</div>
                <div>Kamera</div>
                <div>Kamera</div>
            </div>
        </div>
    )
}