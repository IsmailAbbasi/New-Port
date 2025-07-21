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
          <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-200 mb-2">MY PROJECTS</h2>
          <p className="text-gray-300 text-base mb-4">
            These are some of the projects that I have worked upon
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <span className="font-semibold text-gray-200">Examinate AI - Exam Preparation App</span><br />
              <span className="text-gray-300">ExaminateAI generates personalized practice exams, provides instant feedback, and helps you improve your knowledge in any academic field. The smartest way to prepare for tests, examinations, and certifications.</span>
              <br />
              <Link href="https://examinateai.com/" className="text-blue-400 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Examinate AI
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Netflic</span><br />
              <span className="text-gray-300">Movie recommendation app made by using ReactJs.</span>
              <br />
              <Link href="https://netflic.netlify.app/" className="text-blue-400 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Netflic
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Movie Rating</span><br />
              <span className="text-gray-300">Movie rating app made by ReactJS.</span>
              <br />
              <Link href="https://usepopcorn-ebon.vercel.app/" className="text-blue-400 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Movie Rating
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">KeyCryptor</span><br />
              <span className="text-gray-300">A Password Manager App made using Django and SQLite.</span>
              <br />
              <Link href="https://keycryptor-926c7cc2b1ab.herokuapp.com/signup/" className="text-blue-400 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out KeyCryptor
              </Link>
            </li>
            <li>
              <span className="font-semibold text-gray-200">Medicine Records</span><br />
              <span className="text-gray-300">A Medicine Records App made using Django and SQLite.</span>
              <br />
              <Link href="https://medicine-records-app.onrender.com/" className="text-blue-400 underline pointer-events-auto" target="_blank" rel="noopener noreferrer">
                Check out Medicine Records
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
