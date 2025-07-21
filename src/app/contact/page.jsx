'use client';
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed
import Link from 'next/link'; // If using Next.js
import VariableProximity from '../../components/VariableProximity';
import Footer from '../../components/Footer';

export default function Home() {

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

      <main
        className="relative z-10 flex flex-col items-start justify-start w-full max-w-2xl px-4 sm:px-8 pt-32 sm:pt-40 pb-8 sm:pb-16 min-h-screen overflow-x-hidden"
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-full max-w-xl flex flex-col gap-6 items-start">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-6">Contact me </h2>
          <ul className="flex flex-col gap-4">
            
          </ul>
        </div>
      </main>
      <Footer />

    </div>
  );
}
