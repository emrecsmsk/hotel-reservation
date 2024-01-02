"use client"

import Image from "next/image"
import { FC } from "react"
import { FaLocationDot } from "react-icons/fa6"
import { IoLogoUsd } from "react-icons/io"
import { FaRegStar, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";


interface HotelCardProps {
    id: number
    image: string
    name: string
    location: string
    price: number
    isFavorite: boolean
    onPressFavorite: (id: number) => void
}

const HotelCard: FC<HotelCardProps> = ({ id, image, name, location, price, isFavorite, onPressFavorite }) => {

    const router = useRouter()

    return (
        <div className="bg-black m-2 h-[300px] relative overflow-hidden flex justify-center rounded-xl shadow-md cursor-pointer">
            <Image src={image}
                onClick={() => { router.push(`/hotels/${id}`) }}
                className="hover:scale-110 transition"
                layout="fill"
                alt={"Hotel image"} />
            {
                isFavorite ?
                    <button onClick={() => onPressFavorite(id)}>
                        <FaStar className="absolute top-2 right-2 text-yellow-400" size={24} />
                    </button>
                    :
                    <button onClick={() => onPressFavorite(id)} >
                        <FaRegStar className="absolute top-2 right-2 text-white" size={24} />
                    </button>
            }
            <div
                className="absolute bottom-2 bg-opacity-60 bg-black rounded-lg w-[80%]"
                onClick={() => { router.push(`/hotels/${id}`) }}
            >
                <h1 className="text-white text-center">{name}</h1>
                <div className="flex justify-around">
                    <div className="flex items-center">
                        <FaLocationDot className="text-white" size={16} />
                        <h2 className="text-white">{location}</h2>
                    </div>
                    <div className="flex items-center">
                        <IoLogoUsd className="text-white" size={16} />
                        <h2 className="text-white">{price}</h2></div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard