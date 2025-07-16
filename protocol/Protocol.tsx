"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Definition, DescText1, DescText2, MainTextQuestion, Questions } from './index.ts'

const highlightHeader = (text: string) => {
  // First, match the phrase 'Protocol Flow' as a whole, then fallback to individual words
  const parts = text.split(/(Protocol Flow|Protocol|Binetic|Flow|machines?|Machines?)/gi);
  return parts.map((part, i) => {
    if (/^protocol flow$/i.test(part)) {
      // Use a vibrant cyan to represent data in motion/connectivity
      return <span key={i} className="text-cyan-400 font-bold">{part}</span>;
    }
    if (/^protocol$/i.test(part)) {
      return <span key={i} className="text-blue-400 font-semibold">{part}</span>;
    }
    if (/^binetic$/i.test(part)) {
      return <span key={i} className="text-green-400 font-semibold">{part}</span>;
    }
    if (/^flow$/i.test(part)) {
      return <span key={i} className="text-gray-500 font-semibold">{part}</span>;
    }
    if (/^machines?$/i.test(part)) {
      return <span key={i} className="text-gray-500/50 font-semibold">{part}</span>;
    }
    return part;
  });
};

const highlightMainBullet = (text: string) => {
  // First, match the phrase 'Protocol Flow' as a whole, then fallback to individual words
  const parts = text.split(/(Protocol Flow|Protocol|Flow)/gi);
  return parts.map((part, i) => {
    if (/^protocol flow$/i.test(part)) {
      return <span key={i} className="text-cyan-400 font-bold">{part}</span>;
    }
    if (/^protocol$/i.test(part)) {
      return <span key={i} className="text-blue-400 font-semibold">{part}</span>;
    }
    if (/^flow$/i.test(part)) {
      return <span key={i} className="text-gray-500 font-semibold">{part}</span>;
    }
    return part;
  });
};

const branchBullets = Questions.map(q => ({
  title: q.Q1 || q.Q2,
  desc: q.Ans1 || q.Ans2
}));

const Protocol = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showMainDecs, setShowMainDecs] = useState(false);
  const [showSmallDec, setShowSmallDec] = useState(false);
  const [showMainBullet, setShowMainBullet] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showBullets, setShowBullets] = useState(Array(branchBullets.length).fill(false));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bulletSectionRef = useRef<HTMLDivElement>(null);
  const [bulletSectionInView, setBulletSectionInView] = useState(false);

  useEffect(() => {
    // Sequential reveal for header and descriptions
    const reveal = async () => {
      await new Promise(res => setTimeout(res, 100));
      setShowHeader(true);
      await new Promise(res => setTimeout(res, 400));
      setShowMainDecs(true);
      await new Promise(res => setTimeout(res, 400));
      setShowSmallDec(true);
    };
    reveal();
  }, []);

  // Intersection Observer for bullet section
  useEffect(() => {
    if (!bulletSectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBulletSectionInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(bulletSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Sequential reveal for mainBullet, line, and branchBullets when in view
  useEffect(() => {
    if (!bulletSectionInView) return;
    const revealBullets = async () => {
      setShowMainBullet(true);
      await new Promise(res => setTimeout(res, 300));
      setShowLine(true);
      for (let i = 0; i < branchBullets.length; i++) {
        await new Promise(res => setTimeout(res, 300));
        setShowBullets(prev => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }
    };
    revealBullets();
  }, [bulletSectionInView]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <header className={`w-full flex justify-center transition-all duration-700 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        <h1 className="text-white font-bold text-center break-words text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl">
          {highlightHeader(Definition)}
        </h1>
      </header>
      <section className="w-full flex flex-col items-center">
        <p className={`text-white/40 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 mb-2 transition-all duration-700 ${showMainDecs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          {DescText1}
        </p>
        <p className={`text-white/40 font-semibold text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-center mt-16 transition-all duration-700 ${showSmallDec ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          {DescText2}
        </p>
      </section>
      <section ref={bulletSectionRef} className={`w-full mt-40 flex flex-col justify-start transition-all duration-700`}>
        <h2 className={`text-white font-medium text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl text-left w-full transition-all duration-700 ${showMainBullet ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {highlightMainBullet(MainTextQuestion)}
        </h2>
        <hr className={`w-[75%] border-t border-white/20 my-8 transition-all duration-700 ${showLine ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`} />
        <div className="w-full mt-6">
          <ul className="list-none space-y-4 w-full">
            {branchBullets.map((bullet, index) => {
              const title = bullet.title;
              const desc = bullet.desc;
              const isOpen = openIndex === index;
              return (
                <li key={index} className={`text-white/90 flex flex-col items-start transition-all duration-700 ${showBullets[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <button
                    className={`flex items-center font-semibold focus:outline-none transition-colors duration-300 hover:text-blue-400 cursor-pointer ${isOpen ? 'shine-text' : ''}`}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    type="button"
                  >
                    <span className="mr-2 text-xl select-none" aria-hidden="true">-</span>
                    {title}
                  </button>
                  {/* Animated line from title to desc */}
                  <div
                    className={`transition-all duration-700 ease-in-out ${isOpen ? 'h-[2px] w-32 sm:w-48 md:w-64 bg-gradient-to-r from-white/60 via-slate-300 to-white/0 opacity-80 my-2' : 'h-[2px] w-0 opacity-0 my-2'}`}
                    style={{ borderRadius: '1px' }}
                  />
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                    style={{
                      transitionProperty: 'max-height, opacity, margin-top',
                    }}
                  >
                    <div className="text-white/60">
                      {desc}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <style jsx>{`
        .shine-text {
          background: linear-gradient(90deg, silver, black 40%, white 60%, silver);
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </main>
  )
}

export default Protocol
