'use client';

import Image from "next/image";
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen flex items-center justify-center">
      {/* Dither Shader Background Section */}
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
      <main className="relative z-10 flex flex-col gap-8 items-center justify-center w-full max-w-2xl p-6 sm:p-12 pointer-events-none">
        <h1 className="text-white text-4xl sm:text-5xl font-bold text-center pointer-events-auto">Ismail Abbasi</h1>
        {/* Your content goes here */}
      </main>
    </div>
  );
}