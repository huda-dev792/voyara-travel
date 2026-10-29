import React from "react";
import {Link} from "react-router-dom";
import { ArrowRight, MapPin } from 'lucide-react'

function Destinations () {
    return(
        <section id="destinations" className="relative overflow-hidden bg-gradient-to-b from-[#263f50] via-[#163331] to-[#071c1b] px-6 py-20 md:px-12">
            <div className="text-center">
            <div className="flex gap-3 text-center justify-center">
                   <div className="mt-2 mb-4 h-0.5 rounded-full w-16 bg-gold"></div>
                   <p className="text-xs tracking-[0.2em] text-gold uppercase"> 
                    explore pakistan
                   </p>
                   <div className="mt-2 mb-4 h-0.5 rounded-full w-16 bg-gold"></div>
                   </div>
                   <h2 className=" text-3xl md:text-5xl font-semibold uppercase leading-tight text-white mt-6">
                        discover the nothern areas
                
                    </h2>
                    <p className="mt-5 text-white/70 leading-7 mx-w-2xl">From majestic mountains to peaceful valleys, 
                              discover the natural beauty of Pakistan's northern regions.</p>

                    <div className="mt-12 grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80" 
                            alt="Hunza Valley" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Mountain Escape</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Gilgit Baltistan
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Hunza Valley</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Majestic peaks, historic forts and breathtaking valeys.</p>
                        <Link to={`/tour?destination=${encodeURIComponent("Hunza Valley")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                     <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80" 
                            alt="Skardu" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Adventure</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Gilgit Baltistan
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Skardu</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Crystal-clear lakes, dramatic mountains and desert landsscape</p>
                       <Link to={`/tour?destination=${encodeURIComponent("Skardu")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                     <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80" 
                            alt="Fairy Meadows nature" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Nature Retreat</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Near Nanga Parbat
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Fairy Meadows</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Green meadows, mountain views and peaceful camping escapes. </p>
                        <Link to={`/tour?destination=${encodeURIComponent("Fairy Meadows")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                     <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80" 
                            alt="Sawat and Kalam" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Valley Escape</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Khyber pakhtunkhwa
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Sawat &amp; Kalam</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Lush green valleys, flowing rivers and refreshing mountain air.</p>
                        <Link to={`/tour?destination=${encodeURIComponent("Sawat & Kalam")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                     <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1728137490905-281e8c23712f?auto=format&fit=crop&fm=jpg&q=80&w=1200" 
                            alt="Kashmir" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Nature Retreat</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Azad Jammu & Kashmir
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Azad Kashmir</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Discover the natural beauty and rich culture of this stunning region.</p>
                        <Link to={`/tour?destination=${encodeURIComponent("Azad Kashmir")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                     <div className="group overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition-duration-300 hover:-translate-y-2">
                        <div className="relative h-[420px] overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1722599504918-a7e94343184a?auto=format&fit=crop&fm=jpg&q=80&w=1200" 
                            alt="Naran & Kaghan mountains" className="h-full w-full object-cover transition-transform duration-500 
                            group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>                            
                            <div className="absolute top-4 left-4 rounded-full text-xs px-3 py-1 bg-black/50 backdrop-blur p-2 text-gold">
                            Valley Escape</div>
                             <div className="absolute bottom-0 p-5 left-0 w-full text-left">
                        <p className="flex item-center gap-2 text-sm text-gold">
                           <MapPin size={15} />
                           Khyber pakhtunkhwa
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Naran &amp; Kaghan</h3>
                        <p className="text-white/80 mt-2 text-sm leading-6 ">Explore scenic mountain valleys, crystal-clear rivers, and the breathtaking beauty of saif-ul-malook.</p>
                        <Link to={`/tour?destination=${encodeURIComponent("Naran & Kaghan")}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold  text-gold">
                            View Tour <ArrowRight size={16} />
                        </Link>
                             </div>
                        </div>
                     </div>
                </div>         
            </div> 
        </section>
    )
}

export default Destinations