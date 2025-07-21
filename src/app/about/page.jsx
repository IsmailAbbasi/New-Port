'use client';
import dynamic from 'next/dynamic';
const RotatingText = dynamic(() => import('../../components/RotatingText'), { ssr: false });
import Image from "next/image";
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed

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

      {/* Main Content */}
      <main
        className="relative z-10 flex flex-col items-start justify-start w-full max-w-2xl px-4 sm:px-8 pt-32 sm:pt-40 pb-8 sm:pb-16 min-h-screen overflow-x-hidden"
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-full max-w-xl flex flex-col gap-6 items-start">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-6">About Me</h2>
          <p className="text-gray-300 text-base mb-4">
        I am a Full Stack Developer with a strong foundation in React.js and Django, recently graduated with a B.Tech in Computer Science and Engineering from Jamia Hamdard University, New Delhi (July 2025). I am currently exploring exciting opportunities where I can learn, grow, and make an impact through code.          </p>
          <div className="mb-4">
            <span className="font-semibold text-gray-200">Technical Skills:</span>
            <ul className="list-disc ml-6 text-gray-300">
              <li>Frontend: React.js, HTML5, CSS3, JavaScript</li>
              <li>Backend: Python, Django</li>
              <li>Version Control: Git, GitHub</li>
              <li>Other: APIs, JSON, Bootstrap</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-gray-200">Some hobbies :P</span>
            <ul className="list-disc ml-6 text-gray-300">
              <li>Sports</li>
              <li>Tech</li>
              <li>Photography</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
