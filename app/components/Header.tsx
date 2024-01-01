"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

const Header = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const currentRoute = usePathname()

    return (
        <div>
            <div className="w-full h-24 flex justify-between px-5 items-center">
                <div>
                    <Link href={"/"}>
                        <Image src="/assets/logo.png" width={75} height={75} alt={"Logo"} />
                    </Link>
                </div>
                <div className="hidden sm:block">
                    <div className="flex gap-7">
                        <Link href={"/"}>
                            <h1 className={currentRoute === '/' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>Home</h1>
                        </Link>
                        <Link href={"/favorite-hotels"}>
                            <h1 className={currentRoute === '/favorite-hotels' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>Favorite hotels</h1>
                        </Link>
                        <Link href={"/about"}>
                            <h1 className={currentRoute === '/about' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>About</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-[#1097A9] text-white px-6 py-3 rounded-md hover:bg-[#073c43] transition">
                        <h1 className="text-sm">Reservation</h1>
                    </button>
                    <button
                        onClick={() => setisMenuOpen(!isMenuOpen)}
                    >
                        <FiMenu className="sm:hidden text-[#1097A9] hover:text-[#073c43]" size={25} />
                    </button>
                </div>
            </div>
            {
                isMenuOpen ?
                    <div className="sm:hidden items-center flex flex-col gap-3">
                        <Link href={"/"}>
                            <h1 className={currentRoute === '/' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>Home</h1>
                        </Link>
                        <Link href={"/favorite-hotels"}>
                            <h1 className={currentRoute === '/favorite-hotels' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>Favorite hotels</h1>
                        </Link>
                        <Link href={"/about"}>
                            <h1 className={currentRoute === '/about' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>About</h1>
                        </Link>
                        <Link href={"/contact"}>
                            <h1 className={currentRoute === '/contact' ? "text-sm text-[#1097A9]" : "text-sm hover:text-[#1097A9]"}>Contact</h1>
                        </Link>
                        <button
                            onClick={() => setisMenuOpen(false)}
                        >
                            <IoClose className="sm:hidden text-[#1097A9] hover:text-[#073c43]" size={25} />
                        </button>
                    </div>
                    : null
            }
            <hr className="bg-gray-500" />
        </div>
    )
}

export default Header