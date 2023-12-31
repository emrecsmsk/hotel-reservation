import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#073C43] w-full p-3 flex sm:flex-row flex-col gap-3">
            <Link href={"/"}>
                <Image className="rounded-md" src="/assets/logo_white.png" width={75} height={75} alt={"Logo"} />
            </Link>
            <div className="flex-1">
                <div className="flex justify-center gap-7 sm:flex-row flex-col">
                    <div className="flex items-center gap-2">
                        <HiOutlineMail className="text-white" size={24} />
                        <h3 className="text-white hover:underline transition">hotel@example.com</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsTelephone className="text-white" size={24} />
                        <h3 className="text-white hover:underline transition">+85 0934 425 031</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <GoHome className="text-white " size={24} />
                        <h3 className="text-white hover:underline transition">498 Evergreen Rd. Roseville, CA 98823</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mt-6">
                    <Link href={"#"}>
                        <FaFacebookF className="text-white" size={16} />
                    </Link>
                    <Link href={"#"}>
                        <FaTwitter className="text-white" size={16} />
                    </Link>
                    <Link href={"#"}>
                        <FaInstagram className="text-white" size={16} />
                    </Link>
                    <Link href={"#"}>
                        <FaYoutube className="text-white" size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer