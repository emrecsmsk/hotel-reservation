import Image from "next/image"
import React from 'react'

const About = () => {
    return (
        <div>
            <div className="w-full bg-black h-[235px] relative flex justify-center items-center">
                <div className="w-full h-full absolute">
                    <Image src="https://img001.prntscr.com/file/img001/GLGUuEVKRxiNrWvj16M07g.jpg" fill alt="chair photo" />
                </div>
                <div className="w-full h-full bg-black opacity-30 absolute" />
                <h1 className="text-white underline relative text-3xl">ABOUT US</h1>
            </div>
            <div className="flex md:m-32 m-16 md:flex-row flex-col gap-3">
                    <h1 className="text-bold md:text-6xl text-4xl">A BRIEF HISTORY OF OUR WEBSITE.</h1>
                    <p className="w-[70%]">We started building our website in 1995. Since then, we’ve grown into the hotel with the best client service in our country. From 2010, we have offered many new services to meet client’s demand better such as Spa, wellness, Airport shuttle.</p>
            </div>
        </div>
    )
}

export default About