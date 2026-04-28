import Image from "next/image";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white text-black pt-16 pb-24 md:pb-40 mt-24 overflow-hidden border-t border-black/10">
      <div className="w-full px-4 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-black/60 font-medium">
            © {new Date().getFullYear()} CAPTORANGE. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="mailto:captorange.dev@gmail.com"
            className="flex items-center gap-2 text-black/80 hover:text-primary transition-colors font-bold text-lg"
          >
            <Mail className="w-5 h-5" />
            captorange.dev@gmail.com
          </a>
          <p className="text-sm text-black/60 font-medium flex items-center gap-1.5">
            Made with <span className="text-primary">🧡</span> in India
          </p>
        </div>
      </div>

      {/* Massive Logo at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] sm:w-[120vw] lg:w-screen xl:w-[120vw] translate-y-[35%] md:translate-y-[40%] pointer-events-none opacity-60 flex justify-center items-end">
        <Image
          src="/captorange_logo.png"
          alt="CAPTORANGE Background Logo"
          width={2000}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
    </footer>
  );
}
