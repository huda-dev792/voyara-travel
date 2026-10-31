import React from "react";
import { ArrowRight, Plane } from 'lucide-react'

function Hero () {
    return(
        <section className="relative mx-4 md:mx-8">
            <div className="relative flex items-center min-h-[560px] px-6 py-20 md:min-h-[650px] md:px-16">
                <div className="max-w-3xl">
                    <p className="flex gap-4 items-center text-gold mb-4 uppercase">
                        <Plane size={28}/>
                        Travel Beyound Ordinary
                    </p>
                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white mt-6">
                        The world is vast
                    <br/>
                    <span className="text-gold font-display italic">Make it yours.</span>
                    </h1>
                    <p className="text-white/80 mt-6 md-text-lg max-w-lg text-base leading-7 ">
                    Discover extraordinary distinations and unforgettable 
                      journeys, thoughtfully desinged around you.
                   </p>
                   <a href="/voyara-travel/#about" className="mt-8 inline-block rounded-full  bg-gold text-black px-6 py-3 font-semibold hover:bg-[#f4bd55]/90 transition">
                    Discover journeys <ArrowRight className="inline ml-3" size={18}/>
                   </a>
                   <div className="flex gap-3">
                   <div className="mt-12 mb-4 h-1 rounded-full w-11 bg-gold"></div>
                   <p className="mt-10 text-xs tracking-[0.2em] text-white/80 uppercase"> 
                    YOUR JOURNEY. YOUR STORY
                   </p>
                   </div>
                </div>
            </div>

        </section>
    )
}

export default Hero