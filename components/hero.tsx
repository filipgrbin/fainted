"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const linesRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.55s ease-out ${i * 90}ms, transform 0.55s ease-out ${i * 90}ms`;
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Radial glow behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,61,129,0.10) 0%, rgba(255,61,129,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — text + buttons */}
          <div className="flex-1 space-y-6">
            {/* Badge with pulsing dot */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span
                className="w-2 h-2 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }}
              />
              <span className="text-accent text-sm font-medium">Accepting new creators</span>
            </div>

            {/* Headline — line-by-line stagger */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {["From Raw Footage", "To Content", "That Performs"].map((line, i) => (
                <span
                  key={i}
                  ref={(el) => { if (el) linesRef.current[i] = el; }}
                  className="block"
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              I help creators turn raw footage into top-quality content that captures attention and performs across platforms. From long-form storytelling to high-energy shorts, every edit is crafted to engage viewers and elevate your content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection("work")}
                className="btn-primary px-8 py-4 bg-accent text-background font-semibold rounded-lg border border-accent"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-outline px-8 py-4 border border-accent/40 text-foreground font-medium rounded-lg hover:bg-accent/10 transition-colors"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </div>

          {/* Right — autoplaying muted video */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-secondary/10 aspect-video border border-white/[0.06]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://youtu.be/dY4zlJvbAnw" type="video/mp4" />
              </video>
              {/* Placeholder shown when video isn't loaded */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                <span className="text-secondary/40 text-sm">Video Preview</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
