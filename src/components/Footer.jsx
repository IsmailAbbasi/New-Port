export default function Footer() {
  return (
          <footer className="mt-auto w-full px-4 sm:px-8 py-2 bg-black/20 backdrop-blur-lg border-t border-white/[0.08] shadow-[0_-2px_8px_0_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2">
        <h3 className="text-gray-200 text-base font-bold mb-1 text-center">Connect With Me</h3>
        <div className="flex gap-3 justify-center items-center">
          <a
            href="https://x.com/ismailisonmoon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg p-1.5 flex items-center justify-center transition hover:bg-white/20 hover:border-white/30"
            aria-label="X"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-gray-300 transition">
              <path fill="currentColor" d="M17.53 3H21.5l-7.16 8.21L22.5 21h-7.07l-5.66-6.5L2.5 21H-1.5l7.66-8.78L1.5 3h7.07l5.07 5.83L17.53 3zm-1.13 2.13l-4.4 5.05-1.13 1.26-6.09 6.97h3.07l4.4-5.05 1.13-1.26 6.09-6.97h-3.07z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ismailisonmoon/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg p-1.5 flex items-center justify-center transition hover:bg-white/20 hover:border-white/30"
            aria-label="Instagram"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-gray-300 transition">
              <path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.5a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-ismail-abbasi-bba550228/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg p-1.5 flex items-center justify-center transition hover:bg-white/20 hover:border-white/30"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-gray-300 transition">
              <path fill="currentColor" d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 6A1.5 1.5 0 108 10.5 1.5 1.5 0 009.5 9zm-2 2.5h3v7h-3v-7zm5 0h2.5v1h.03a2.75 2.75 0 012.47-1.36c2.64 0 3.13 1.74 3.13 4v3.36h-3v-3c0-.72-.01-1.65-1-1.65s-1.15.77-1.15 1.59v3.06h-3v-7z"/>
            </svg>
          </a>
          <a
            href="https://github.com/IsmailAbbasi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg p-1.5 flex items-center justify-center transition hover:bg-white/20 hover:border-white/30"
            aria-label="GitHub"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-gray-300 transition">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.18 9.18 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-300 text-xs font-mono mt-1 text-center">
          © {new Date().getFullYear()} Ismail Abbasi &mdash; Crafted with React, Next.js & Tailwind CSS
        </p>
      </footer>
  );
}