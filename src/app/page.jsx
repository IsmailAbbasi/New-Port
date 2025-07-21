'use client';
import dynamic from 'next/dynamic';
const RotatingText = dynamic(() => import('../components/RotatingText'), { ssr: false });
import Image from "next/image";
import Dither from "@/blocks/Backgrounds/Dither/Dither";
import ShinyText from '../components/ShinyText';
import Link from 'next/link';
import VariableProximity from '../components/VariableProximity';
import { useRef } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="relative font-sans min-h-screen flex flex-col overflow-x-hidden">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        {/* <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        /> */}


<Dither
  waveColor={[0.5, 0.5, 0.5]}
  disableAnimation={false}
  enableMouseInteraction={true}
  mouseRadius={0.3}          
  colorNum={4}
  waveAmplitude={0.3}     
  waveFrequency={3}        
  waveSpeed={0.08}             
/>
      </div>

      {/* Home Section */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4 sm:px-8 py-8 sm:py-16 mx-auto min-h-screen overflow-x-hidden" style={{ pointerEvents: 'none' }}>
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
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 flex flex-col items-start justify-start w-full max-w-2xl px-4 sm:px-8 pt-32 sm:pt-40 pb-8 sm:pb-16 min-h-screen overflow-x-hidden" style={{ pointerEvents: 'none' }}>
        <div className="w-full max-w-xl flex flex-col gap-6 items-start">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-6">About Me</h2>
          <p className="text-gray-300 text-base mb-4">
            I am a Full Stack Developer with a strong foundation in React.js and Django, recently graduated with a B.Tech in Computer Science and Engineering from Jamia Hamdard University, New Delhi (July 2025). I am currently exploring exciting opportunities where I can learn, grow, and make an impact through code.
          </p>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 flex flex-col items-start justify-start w-full max-w-2xl px-4 sm:px-8 pt-32 sm:pt-40 pb-8 sm:pb-16 min-h-screen overflow-x-hidden" style={{ pointerEvents: 'none' }}>
        <div className="w-full max-w-xl flex flex-col gap-6 items-start">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-2">MY PROJECTS</h2>
          <p className="text-gray-300 text-base mb-4">
            These are some of the projects that I have worked upon
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <span className="font-semibold text-gray-200">Examinate AI - Exam Preparation App</span><br />
              <span className="text-gray-300">ExaminateAI generates personalized practice exams, provides instant feedback, and helps you improve your knowledge in any academic field. The smartest way to prepare for tests, examinations, and certifications.</span>
              <br />
              <Link href="https://examinateai.com/" className="text-gray-200 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Examinate AI
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Netflic</span><br />
              <span className="text-gray-300">Movie recommendation app made by using ReactJs.</span>
              <br />
              <Link href="https://netflic.netlify.app/" className="text-gray-200 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Netflic
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Movie Rating</span><br />
              <span className="text-gray-300">Movie rating app made by ReactJS.</span>
              <br />
              <Link href="https://usepopcorn-ebon.vercel.app/" className="text-gray-200 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Movie Rating
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">KeyCryptor</span><br />
              <span className="text-gray-300">A Password Manager App made using Django and SQLite.</span>
              <br />
              <Link href="https://keycryptor-926c7cc2b1ab.herokuapp.com/signup/" className="text-gray-200 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out KeyCryptor
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Medicine Records</span><br />
              <span className="text-gray-300">A Medicine Records App made using Django and SQLite.</span>
              <br />
              <Link href="https://medicine-records-app.onrender.com/" className="text-gray-200 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Medicine Records
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 flex flex-col items-start justify-start w-full max-w-2xl px-4 sm:px-8 pt-32 sm:pt-40 pb-8 sm:pb-16 min-h-screen overflow-x-hidden" style={{ pointerEvents: 'none' }}>
        <div className="w-full max-w-xl flex flex-col gap-6 items-start">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-6">Contact Me</h2>
          <p className="text-gray-300 text-base mb-4">
            Let's connect! Feel free to reach out to me through any of the platforms below.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-semibold text-gray-200">Email:</span>
              <p className="text-gray-300">ismailabbasi118@gmail.com</p>
            </div>
            <div>
              <span className="font-semibold text-gray-200">Phone:</span>
              <p className="text-gray-300">+91 XXXXXXXXXX</p>
            </div>
            <div>
              <span className="font-semibold text-gray-200">Location:</span>
              <p className="text-gray-300">New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}