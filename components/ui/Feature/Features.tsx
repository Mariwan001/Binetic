"use client"

import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.15, rootMargin: '-80px' }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
    }, [])

    // Helper for staggered delays
    const fadeClass = (delay: number) =>
        `transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible ? `opacity-100 translate-y-0 delay-[${delay}ms]` : 'opacity-0 translate-y-12 delay-0'
        }`

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden py-10 sm:py-14 md:py-20 lg:py-28 xl:py-32"
        >
            <div className="mx-auto max-w-6xl space-y-8 px-2 sm:px-4 md:px-8 xl:px-0 md:space-y-14">
                <div className="relative z-10 max-w-2xl mx-auto text-center md:text-left">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white ${fadeClass(0)}`}>Built for Evolving Systems</h2>
                    <p className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 ${fadeClass(200)}`}>Empower your team to orchestrate code, data, and logic whether syncing via Git, protocols, or raw binary structures.</p>
                </div>
                <div className={`relative flex justify-center items-center w-full ${fadeClass(400)}`}> 
                    <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[90vw]">
                        <div className="relative aspect-[88/36] w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl">
                            {/* mail-back as background */}
                            <Image src="/imgs/mail-back.webp" fill priority className="object-cover object-center select-none pointer-events-none" alt="background illustration" />
                            {/* mail-upper as dashboard above */}
                            <Image src="/imgs/mail-upper.webp" fill priority className="object-cover object-center select-none pointer-events-none" alt="dashboard illustration" />
                            {/* Gradient overlay for top/bottom borders and corners only */}
                            <span className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-8 sm:gap-y-8 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
                    <div className={`space-y-3 text-center lg:text-left ${fadeClass(600)}`}> 
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Zap className="size-4 sm:size-5 md:size-6 text-white" />
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white">Reactive Execution</h3>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">Stream updates across computation layers with near-zero latency. No lag. Just flow.</p>
                    </div>
                    <div className={`space-y-3 text-center lg:text-left ${fadeClass(800)}`}> 
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Cpu className="size-4 sm:size-5 md:size-6 text-white" />
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white">Programmable Everything</h3>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">Control each data cycle, define logic, mutate protocols—Binetic adapts to your thinking.</p>
                    </div>
                    <div className={`space-y-3 text-center lg:text-left ${fadeClass(1000)}`}> 
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Lock className="size-4 sm:size-5 md:size-6 text-white" />
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white">Immutable by Design</h3>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">Every transformation is traceable, every packet verifiable. Nothing escapes the log.</p>
                    </div>
                    <div className={`space-y-3 text-center lg:text-left ${fadeClass(1200)}`}> 
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Sparkles className="size-4 sm:size-5 md:size-6 text-white" />
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white">Logic-Augmented</h3>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm md:text-base">Visualize how human logic fuses with algorithmic feedback loops—coding the future with clarity.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}