'use client';
import dynamic from 'next/dynamic';
const RotatingText = dynamic(() => import('../components/RotatingText'), { ssr: false });
import Image from "next/image";
import Dither from "@/blocks/Backgrounds/Dither/Dither"; // Adjust path if needed
import ShinyText from '../components/ShinyText';
import Link from 'next/link'; // If using Next.js

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
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl p-6 sm:p-12 pointer-events-none">
        <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 w-fit max-w-full align-middle max-h-[90%] flex flex-col gap-2 text-zone">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-[40px] font-semibold text-gray-200 whitespace-nowrap">
                I am Ismail Abbasi
              </span>
              <span className="text-[34px] font-medium text-gray-200">
                Full Stack Developer.
              </span>
              <p className="text-[13px] text-white font-mono font-light min-w-fit animate-pulse mb-4">
                Check out my resume below!
              </p>
              {/* Flex row for button and rotating text */}
              <div className="flex flex-row items-center gap-4 w-full">
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
        </div>
      </main>
    </div>
  );
}