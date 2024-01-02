"use client"

import { HotelModel } from "@/app/models/HotelModel"
import { RootState } from "@/app/redux/store"
import { Input } from "@nextui-org/react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const HotelInformation = () => {

    const params = useParams()
    const { hotelsResponse } = useSelector((state: RootState) => state.hotels)
    const [hotelInfo, setHotelInfo] = useState<HotelModel>()
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    })

    useEffect(() => {
        const getHotelInfo = () => {
            hotelsResponse?.hotels.map((hotel: HotelModel) => {
                if (hotel.id === Number(params.id)) {
                    setHotelInfo(hotel)
                }
            })
        }
        getHotelInfo()
    }, [])

    const handleDateChange = (newValue: any) => {
        setValue(newValue);
    }

    return (
        <div>
            <div className="w-full bg-black h-[235px] relative flex justify-center items-center">
                <div className="w-full h-full absolute">
                    <Image src="https://img001.prntscr.com/file/img001/GLGUuEVKRxiNrWvj16M07g.jpg" fill alt="chair photo" />
                </div>
                <div className="w-full h-full bg-black opacity-30 absolute" />
                <h1 className="text-white underline relative text-3xl">{hotelInfo?.name}</h1>
            </div>
            <div className="flex md:flex-row flex-col md:my-32 my-16 md:mx-8 mx-2 gap-8">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-bold md:text-4xl text-2xl">Overview</h1>
                    <p className="text-black-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio officiis facere quibusdam aliquam necessitatibus vel, voluptatum labore doloribus cupiditate aut rem sed ipsam, eveniet esse illo dolore quo odit ipsa deleniti aliquid asperiores, commodi ut. Repudiandae, minima hic? Asperiores, quas harum. Iste aliquid impedit est earum autem a minima. Perferendis.</p>
                    <h1 className="text-bold md:text-4xl text-2xl mt-10">Map</h1>
                    <div className="relative w-full h-96">
                        <iframe className="absolute top-0 left-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                            aria-hidden="false">
                        </iframe>
                    </div>
                </div>
                <div className="flex-1 w-full  rounded-lg flex flex-col items-center p-3 gap-5">
                    <div></div>
                    <h3 className="text-2xl text-[#1097A9] bold">Booking</h3>
                    <div className="flex md:flex-row flex-col w-full gap-3">
                        <Input
                            type="text"
                            label="Name"
                            placeholder="John Doe"
                        />
                        <Input
                            type="email"
                            label="Email"
                            placeholder="hotel@example.com"
                        />
                    </div>
                    <div className="flex md:flex-row flex-col w-full gap-3">
                        <Input
                            type="tel"
                            label="Number"
                            placeholder="+84 0934 425 031"
                        />
                        <Input
                            type="text"
                            label="Adress"
                            placeholder="Adress"
                        />
                    </div>
                    <div className="flex md:flex-row flex-col w-full gap-3">
                        <Input
                            type="number"
                            label="Guests"
                            placeholder="1"
                        />
                        <Input
                            type="number"
                            label="Rooms"
                            placeholder="1"
                        />
                    </div>
                    <div className="w-full">
                        <h3 className="text-sm">Check in - Check out</h3>
                        <Datepicker
                            primaryColor={"blue"}
                            inputClassName={"p-3 w-full border border-[#1097A9] rounded-lg"}
                            value={value}
                            onChange={handleDateChange}
                            disabledDates={[
                                {
                                    startDate: "0000-01-01",
                                    endDate: "2024-01-01",
                                }
                            ]}
                        />
                    </div>
                    <button className="bg-[#1097A9] text-white px-6 py-3 rounded-md hover:bg-[#073c43] transition">
                        <h1 className="text-sm">BOOK NOW</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HotelInformation