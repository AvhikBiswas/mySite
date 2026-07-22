'use client';
import React, { useState } from 'react';
import {
  Calendar,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ArrowRight,
  MapPin,
  Briefcase
} from 'lucide-react';

export default function Home() {
  const [showConnectOptions, setShowConnectOptions] = useState(false);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 py-12">
      {/* Decorative premium background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse duration-[8000ms]"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-10">

        {/* Slogan */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/80 text-xs text-zinc-400 backdrop-blur-sm">
            <Sparkles size={12} className="text-yellow-500" />
            <span>building breaking finding meaning</span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Avhik Biswas
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            Software Engineer from West Bengal, India
          </p>
        </div>

        {/* Current Work */}
        <div className="p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md max-w-md mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-300">
            <Briefcase size={16} className="text-purple-400" />
            <span>Software Engineer at <span className="font-semibold text-white">HomeAbroad Inc.</span></span>
          </div>
          <div className="text-xs text-zinc-500 flex items-center justify-center gap-1.5">
            <MapPin size={12} />
            <span>US Remote</span>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="https://cal.com/avhik-biswas/say-hi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-lg shadow-white/5 cursor-pointer"
          >
            <Calendar size={18} />
            Schedule a Call
          </a>

          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowConnectOptions(!showConnectOptions)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-200 font-medium active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowRight size={16} className={`transform transition-transform duration-200 ${showConnectOptions ? 'rotate-90' : ''}`} />
            </button>

            {/* Micro-interaction: Animated Connect Overlay */}
            {showConnectOptions && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-2 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex gap-3 z-20">
                <a
                  href="https://linkedin.com/in/avhikbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/avhikbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:abhikbiswas351@gmail.com?subject=Saying%20Hi!&body=Hi%20Avhik,%0D%0A%0D%0AI%20would%20love%20to%20connect%20with%20you%20regarding..."
                  className="p-3 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}

