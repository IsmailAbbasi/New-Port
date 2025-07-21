'use client';
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed
import Link from 'next/link'; // If using Next.js
import VariableProximity from '../../components/VariableProximity';

export default function Home() {

  return (
    <div className="relative font-sans min-h-screen flex items-center justify-center overflow-x-hidden">
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
              className="w-full flex flex-col items-center gap-2"
              style={{ position: 'relative', pointerEvents: 'auto' }}
            >
              <VariableProximity
                label="I am Ismail Abbasi"
                className="text-[32px] sm:text-[52px] md:text-[60px] font-semibold text-gray-200 whitespace-nowrap text-center"
                fromFontVariationSettings="'wght' 600, 'opsz' 18"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                radius={100}
                falloff="linear"
              />
              <VariableProximity
                label="Full Stack Developer"
                className="text-[24px] sm:text-[34px] font-medium text-gray-200 whitespace-nowrap text-center"
                fromFontVariationSettings="'wght' 600, 'opsz' 18"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                radius={100}
                falloff="linear"
              />
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
}
