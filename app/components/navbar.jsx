"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isAuthRoute =
        pathname === "/login" ||
        pathname === "/register" ||
        pathname === "/forgot-pass";

    return (
        <>
            {!isAuthRoute && (
                <div className="w-full h-24 z-50 fixed bg-white flex flex-row justify-between items-center px-6 shadow-md">
                    {/* logo */}
                    <Link href={"/"}>
                        <div className="text-3xl">ini logo</div>
                    </Link>

                    {/* two button container */}
                    <div className="flex flex-row space-x-4 text-2xl">
                        <Link className="" href={"/order"}><div className="rounded-lg bg-white border-[#FFD966] border-[3px] p-2 hover:bg-gray-50 active:bg-gray-100">Pesanan</div></Link>
                        <Link className="" href={"/profile"}><div className="rounded-lg bg-white border-[#FFD966] border-[3px] p-2 hover:bg-gray-50 active:bg-gray-100">Profil</div></Link>
                    </div>
                </div>
            )}
        </>
    )
}