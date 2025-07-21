'use client';
import dynamic from 'next/dynamic';
const RotatingText = dynamic(() => import('../components/RotatingText'), { ssr: false });
import Image from "next/image";
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed
import ShinyText from '../components/ShinyText';
import Link from 'next/link'; // If using Next.js
import VariableProximity from '../components/VariableProximity';
import { useRef } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="relative font-sans min-h-screen flex flex-col overflow-x-hidden">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      {/* Main Content */}
      <main
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4 sm:px-8 py-8 sm:py-16 mx-auto min-h-screen overflow-x-hidden"
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-full max-w-xl mx-auto flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4 items-center w-full">
            <div
              ref={containerRef}
              className="w-full flex flex-col items-center gap-2"
              style={{ position: 'relative', pointerEvents: 'auto' }}
            >
              <VariableProximity
                label="I am Ismail Abbasi"
                className="text-[32px] sm:text-[52px] md:text-[60px] font-semibold text-gray-200 whitespace-nowrap text-center"
                fromFontVariationSettings="'wght' 600, 'opsz' 18"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
              <VariableProximity
                label="Full Stack Developer"
                className="text-[24px] sm:text-[34px] font-medium text-gray-200 whitespace-nowrap text-center"
                fromFontVariationSettings="'wght' 600, 'opsz' 18"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            <p className="text-[13px] text-white font-mono font-light min-w-fit animate-pulse mb-4 text-center">
              Check out my resume below!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link
                href="https://drive.google.com/file/d/1yuYWYXCA4wW0b9ZrEtTqRD3wja1t5SfE/view?usp=sharing"
                className="pointer-events-auto px-6 py-3 rounded-xl bg-black/40 backdrop-blur-3xl border border-white/[0.08] shadow-[0_4px_16px_0_rgba(0,0,0,0.4)] font-semibold text-base transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.08)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyText
                  text="Download My Resume"
                  speed={3}
                  className="text-gray-200"
                />
              </Link>
              <RotatingText
                texts={['React', 'Django', 'Nextjs', 'PostgreSQL!', 'Tailwind CSS', 'HTML']}
                mainClassName="px-6 py-3 rounded-xl bg-black/40 backdrop-blur-3xl border border-white/[0.08] shadow-[0_4px_16px_0_rgba(0,0,0,0.4)] text-gray-200 font-semibold text-base transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.08)]"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </main>
<Footer />

    </div>
  );
}
