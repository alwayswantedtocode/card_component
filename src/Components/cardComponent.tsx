"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Panda from "@/Assests/panda.png";
import Man from "@/Assests/man.png";
import Profile from "@/Assests/profile.png";
import broken from "@/Assests/transparent-broken-photo-icon-png-260nw-1980683252.webp";
import { FaTimes } from "react-icons/fa";

const CardComponent = () => {
    const [visibleCards, setVisibleCards] = useState({
        card1: true,
        card2: true,
        card3: true,
        card4: true,
        card5: true,
    });

    const handleRemoveCard = (cardKey:string) => {
        setVisibleCards((prev) => ({ ...prev, [cardKey]: false }));
    };

    return (
        <section className="bg-white w-[90%] md:w-[100%] h-[100%] flex flex-col gap-[20px] p-[10px]">
            {/* First Row */}
            <div className="w-full flex flex-wrap gap-[20px] justify-center ">
                {visibleCards.card1 && (
                    <div className= "card_two bg-neutral-100 border-stone-400 rounded-[0.5rem] p-4 sm:p-6 w-full sm:w-[15rem] h-[17rem] md:w-[20rem] shadow-md relative">
                        <button onClick={() => handleRemoveCard("card1")} className="absolute top-2 right-2  text-black rounded-full w-6 h-6 flex items-center justify-center">
                            <FaTimes />
                        </button>
                        <Image src={Panda} width={64} height={64} alt='' className="object-cover w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] mt-2" />
                        <h3 className="font-bold mt-2">John Doe</h3>
                        <p className="text-sm mt-2">28 years old</p>
                        <p className="text-sm mt-2">A passionate wildlife enthusiast and photographer, often found exploring nature.</p>
                    </div>
                )}
                {visibleCards.card2 && (
                <div className="card bg-neutral-100 border-stone-400 rounded-[0.5rem] p-4 sm:p-6 w-full sm:w-[15rem] h-[17rem] md:w-[20rem] shadow-md relative">
                        <button onClick={() => handleRemoveCard("card2")} className="absolute top-2 right-2  text-black rounded-full w-6 h-6 flex items-center justify-center">
                            <FaTimes />
                        </button>
                        <Image src={Man} width={64} height={64} alt='' className="object-cover w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]" />
                        <h3 className="font-bold mt-2">Jane Smith</h3>
                        <p className="text-sm mt-2">sarahjohnson@example.com</p>
                        <p className="text-sm mt-2">An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.</p>
                    </div>
                )}
                {visibleCards.card3 && (
                    <div className="card_two bg-neutral-100 border-stone-400 rounded-[0.5rem] p-4 sm:p-6 w-full sm:w-[15rem] h-[13rem] md:h-[12rem] md:w-[20rem] shadow-md relative">
                        <button onClick={() => handleRemoveCard("card3")} className="absolute top-2 right-2  text-black rounded-full w-6 h-6 flex items-center justify-center">
                            <FaTimes />
                        </button>
                        <Image src="/broken.jpg" width={30} height={30} alt='User Image' className="object-cover w-[3rem] h-[3rem] md:w-[3rem] md:h-[3rem]" />
                        <p className="text-sm mt-2">mikebrown@example.com</p>
                        <p className="text-sm mt-2">45 years old</p>
                        <p className="text-sm mt-2">Tech-savvy and innovative, Mike is known for his cutting-edge software solutions.</p>
                    </div>
                )}
            </div>

            {/* Second Row */}
            <div className="w-full flex flex-wrap gap-[20px] justify-center">
                {visibleCards.card4 && (
                    <div className="card_two bg-neutral-100 border-stone-400 rounded-[0.5rem] p-4 sm:p-6 w-full sm:w-[15rem] h-[17rem] md:w-[20rem] shadow-md relative">
                        <button onClick={() => handleRemoveCard("card4")} className="absolute top-2 right-2  text-black rounded-full w-6 h-6 flex items-center justify-center">
                            <FaTimes />
                        </button>
                        <Image src={Profile} width={64} height={64} alt='' className="object-cover w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]" />
                        <h3 className="font-bold mt-2">Sarah Johnson</h3>
                        <p className="text-sm mt-2">sarahjohnson@example.com</p>
                        <p className="text-sm mt-2">30 years old</p>
                        <p className="text-sm mt-2">A fitness enthusiast, Sarah enjoys hiking and participating in marathons around the country.</p>
                    </div>
                )}
                {visibleCards.card5 && (
                    <div className="card_two bg-neutral-100 border-stone-400 rounded-[0.5rem] p-4 sm:p-6 w-full sm:w-[15rem] h-[13rem] md:h-[12rem] md:w-[20rem] shadow-md relative">
                        <button onClick={() => handleRemoveCard("card5")} className="absolute top-2 right-2  text-black rounded-full w-6 h-6 flex items-center justify-center">
                            <FaTimes />
                        </button>
                        <Image src="/broken.jpg" width={30} height={30} alt='User Image' className="object-cover w-[3rem] h-[3rem] md:w-[3rem] md:h-[3rem]" />
                        <h3 className="font-bold mt-2">Alex Martinez</h3>
                        <p className="text-sm mt-2">30 years old</p>
                    </div>
                )}
                <div className="bg-white border-stone-400 rounded-[0.5rem] p-[20px] w-full sm:w-[15rem] md:w-[20rem] h-[8rem]"></div>
            </div>
        </section>
    );
};

export default CardComponent;

