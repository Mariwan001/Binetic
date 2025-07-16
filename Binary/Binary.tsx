'use client'

import React, { useEffect, useState } from 'react';
import { mainText, smallMainText } from './index';

const tips = [
  'No variables',
  'No functions',
  'Just voltage on, voltage off.',
  "That’s Binary Lens.",
];

const Binary = () => {
  const [reveal, setReveal] = useState(false);
  const [textSharp, setTextSharp] = useState(false);
  const [tipReveal, setTipReveal] = useState([false, false, false, false]);
  const [lensSize, setLensSize] = useState(420);
  // Add state for orbit radii
  const [orbitRadii, setOrbitRadii] = useState([250, 250, 250, 250]);

  useEffect(() => {
    setTimeout(() => setReveal(true), 400);
    setTimeout(() => setTextSharp(true), 1200);
    tips.forEach((_, i) => {
      setTimeout(() => {
        setTipReveal(prev => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, 1800 + i * 350);
    });
  }, []);

  // Responsive lens size and orbit radii
  useEffect(() => {
    const handleResize = () => {
      const vw = typeof window !== 'undefined' ? window.innerWidth : 420;
      const vh = typeof window !== 'undefined' ? window.innerHeight : 420;
      const size = Math.max(180, Math.min(420, Math.round(Math.min(vw * 0.9, vh * 0.6, 0.6 * vw))));
      setLensSize(size);
      // Calculate orbit radii for tips
      const baseRadius = Math.min(size / 2 + 40, (vw * 0.45) - 60, (vh * 0.35) - 60);
      const newOrbitRadii = tips.map((tip, i) => {
        const isWide = (tip === 'No functions' || tip === "That’s Binary Lens.");
        return baseRadius + (isWide ? 80 : 0);
      });
      setOrbitRadii(newOrbitRadii);
    };
    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Subtle animated scanline/noise background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-black" style={{ opacity: 0.98 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10" />
        <div className="absolute inset-0 animate-scanlines bg-repeat opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #fff2 0 1px, transparent 1px 4px)' }} />
      </div>
      {/* Central Glass/Silver Lens with advanced glassmorphism, no parallax */}
      <div className="relative z-10 flex flex-col items-center justify-center" style={{ minHeight: '60vh', width: '100%' }}>
        <div
          className={`relative flex items-center justify-center rounded-full shadow-2xl border border-white/20 backdrop-blur-2xl advanced-glass`}
          style={{
            width: `clamp(180px, 60vw, 420px)` ,
            height: `clamp(180px, 60vw, 420px)` ,
            maxWidth: '98vw',
            maxHeight: '70vw',
            boxShadow: `0 0 80px 8px #aaa8, 0 2px 32px #fff4, 0 0 0 1px #fff2 inset`,
            transition: 'width 0.4s, height 0.4s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(192,192,192,0.08) 100%)`,
          }}
          aria-label="Binary Lens"
        >
          {/* Glass reflection and inner shine */}
          <div className="absolute left-1/4 top-1/6 w-1/2 h-1/5 rounded-full bg-white/30 blur-2xl opacity-50 pointer-events-none" />
          <div className="absolute right-1/5 bottom-1/4 w-1/4 h-1/6 rounded-full bg-white/10 blur-lg opacity-30 pointer-events-none" />
          <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" style={{ boxShadow: '0 0 32px 2px #fff4 inset' }} />
          {/* Main text, resolves from static to clarity */}
          <div
            className={`transition-all duration-[1600ms] ease-[cubic-bezier(.77,0,.18,1)] text-center px-4 select-none ${reveal ? 'opacity-100' : 'opacity-0 blur-lg'} ${textSharp ? 'blur-0 text-white' : 'blur-md text-slate-300/60'}`}
            style={{ fontSize: `clamp(1rem, 2.5vw, 1.25rem)`, fontWeight: 600, letterSpacing: 0.5, maxWidth: '80%' }}
            aria-live="polite"
          >
            {mainText.replace('exporesstions', 'expressions')}
          </div>
          {/* Subtext, resolves in after main text */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-full text-center transition-all duration-[1600ms] ${textSharp ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontSize: `clamp(0.9rem, 2vw, 1rem)`, color: '#C0C0C0', fontWeight: 400, bottom: '8%' }}
          >
            {smallMainText.replace('opration', 'operation')}
          </div>
        </div>
        {/* Tips arranged around the lens, always flexible, no hover/focus effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: `clamp(320px, 90vw, ${lensSize + 320}px)`, height: `clamp(320px, 90vw, ${lensSize + 320}px)`, maxWidth: '99vw', maxHeight: '80vw' }}
        >
          {tips.map((tip, i) => {
            const angle = (i / tips.length) * 2 * Math.PI - Math.PI / 2;
            const orbitRadius = orbitRadii[i] || 250;
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;
            return (
              <div
                key={i}
                className={`absolute transition-all duration-[1200ms] ${tipReveal[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%)`,
                  pointerEvents: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span
                  className={`flex items-center justify-center font-semibold text-base sm:text-lg md:text-xl text-slate-100 px-4 py-2 border border-white/20 bg-black/60 shadow-none transition-all duration-500 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-white/60 rounded-full whitespace-nowrap min-w-[90px]`}
                  style={{ color: '#C0C0C0', fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', minHeight: 40 }}
                  tabIndex={0}
                  aria-label={tip}
                >
                  <span className="transition-none">
                    {tip}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Subtle, ironic line at the bottom */}
      <div className="relative z-10 mt-24 mb-8 text-center w-full">
        <span className="text-slate-300/80 text-base italic tracking-wide select-none" style={{ letterSpacing: 1, fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          All complexity, reduced to clarity.
        </span>
      </div>
      {/* Styles */}
      <style jsx>{`
        .animate-scanlines {
          animation: scanlines 2.5s linear infinite;
        }
        @keyframes scanlines {
          0% { background-position-y: 0; }
          100% { background-position-y: 8px; }
        }
        .advanced-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(192,192,192,0.08) 100%);
          box-shadow: 0 8px 40px 0 #fff2, 0 0 0 1px #fff2 inset, 0 0 80px 8px #aaa8, 0 2px 32px #fff4;
          border: 1.5px solid rgba(255,255,255,0.13);
        }
        @media (max-width: 600px) {
          .advanced-glass {
            border-width: 1px;
          }
        }
      `}</style>
    </div>
  );
};

export default Binary;

