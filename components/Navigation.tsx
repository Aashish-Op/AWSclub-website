"use client"

import Link from "next/link"

export function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-blue-950/90 opacity-95"></div>
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/3 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400/40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <img src="/image/logo/awslpu.png" alt="AWS Cloud Club" className="h-12 relative z-10 group-hover:scale-105 transition-transform" />
            </div>
            <div className="hidden md:block border-l-2 border-cyan-400/40 pl-3">
              <div className="text-white font-bold text-base tracking-wider uppercase">AWS Cloud Club</div>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-blue-100 hover:text-cyan-300 transition-colors font-mono text-xs uppercase tracking-widest relative group">
              HOME
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#about" className="text-blue-100 hover:text-cyan-300 transition-colors font-mono text-xs uppercase tracking-widest relative group hidden sm:block">
              PROGRAMS
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="/#about" className="text-blue-100 hover:text-cyan-300 transition-colors font-mono text-xs uppercase tracking-widest relative group hidden sm:block">
              About Us
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="/auth/login" className="text-blue-100 hover:text-cyan-300 transition-colors font-mono text-xs uppercase tracking-widest relative group">
              LOGIN
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="/auth/register" className="text-blue-100 hover:text-cyan-300 transition-colors font-mono text-xs uppercase tracking-widest relative group">
              REGISTER
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
