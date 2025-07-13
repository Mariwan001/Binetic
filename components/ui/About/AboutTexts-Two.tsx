'use client'

import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function ContentSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px'
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20">
                    {/* Responsive Heading */}
                    <h2 className={`relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight tracking-tight max-w-4xl lg:max-w-5xl xl:max-w-6xl text-white transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        The Binetic ecosystem brings together our models.
                    </h2>
                    
                    {/* Responsive Grid Layout */}
                    <div className={`grid gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 lg:grid-cols-2 lg:items-center transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        {/* Text Content - Responsive */}
                        <div className="relative space-y-4 sm:space-y-6 md:space-y-8">
                            <p className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-white/80 leading-relaxed transition-all duration-700 ease-out delay-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}>
                                Binetic is a living ecosystem of computation. <span className="text-white font-bold">It interconnects translation, transmission, transformation, and logic into a unified framework</span> from products innovate.
                            </p>
                            <p className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-white/80 leading-relaxed transition-all duration-700 ease-out delay-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}>
                                acts like an organ in a digital organism, working together to expose how systems speak, evolve, and operate in real time. 
                            </p>

                            {/* Responsive Feature Grid */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 lg:pt-10 transition-all duration-800 ease-out delay-900 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className={`space-y-2 sm:space-y-3 md:space-y-4 transition-all duration-600 ease-out delay-1100 ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                                }`}>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Zap className="size-4 sm:size-5 md:size-6 lg:size-6 xl:size-7 flex-shrink-0 text-white" />
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium text-white">Faaast</h3>
                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-white/70 leading-relaxed">
                                        It supports an entire helping developers and innovate.
                                    </p>
                                </div>
                                <div className={`space-y-2 sm:space-y-3 md:space-y-4 transition-all duration-600 ease-out delay-1300 ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                                }`}>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Cpu className="size-4 sm:size-5 md:size-6 lg:size-6 xl:size-7 flex-shrink-0 text-white" />
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium text-white">Powerful</h3>
                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-white/70 leading-relaxed">
                                        It supports an entire helping developers and businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Image Section - Responsive */}
                        <div className={`relative mt-6 sm:mt-8 md:mt-10 lg:mt-0 order-first lg:order-last transition-all duration-1000 ease-out delay-600 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}>
                            <div className="relative w-full h-auto aspect-[67/34] rounded-xl sm:rounded-2xl lg:rounded-3xl xl:rounded-[2rem] 2xl:rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700 p-px">
                                <div className="relative w-full h-full rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-1px)] lg:rounded-[calc(1.5rem-1px)] xl:rounded-[calc(2rem-1px)] 2xl:rounded-[calc(2.5rem-1px)] overflow-hidden">
                                    <Image 
                                        src="/imgs/exercice-dark.webp" 
                                        className="w-full h-full object-cover rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-1px)] lg:rounded-[calc(1.5rem-1px)] xl:rounded-[calc(2rem-1px)] 2xl:rounded-[calc(2.5rem-1px)] transition-all duration-300 ease-in-out hover:scale-[1.02]" 
                                        alt="Lyra ecosystem illustration" 
                                        width={1206} 
                                        height={612}
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}