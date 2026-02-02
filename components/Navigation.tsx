"use client"

import Link from "next/link"

export function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-linear-to-r from-black via-red-950/30 to-black opacity-95"></div>
      <div className="absolute inset-0 bg-linear-to-b from-red-600/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-600/40 transition-all"></div>
              <img src="/image/logo/awslpu.png" alt="AWS Cloud Club" className="h-12 relative z-10 group-hover:scale-105 transition-transform" />
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl tracking-tight animate-flicker">Horizon 2026</div>
              <div className="text-red-500 text-xs font-medium">&gt; AWS Cloud Club LPU</div>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-red-500 transition-colors font-medium text-sm relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#schedule" className="text-white/80 hover:text-red-500 transition-colors font-medium text-sm relative group hidden sm:block">
              Schedule
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#about" className="text-white/80 hover:text-red-500 transition-colors font-medium text-sm relative group hidden sm:block">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="/auth/login"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-6 py-2.5 rounded-lg font-bold text-sm border border-red-600"
            >
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10 text-white">&gt; LOGIN</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
