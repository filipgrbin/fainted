"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50M+", numeric: 50, suffix: "M+", label: "Trusted by creators with subscribers" },
  { value: "120M+", numeric: 120, suffix: "M+", label: "Generated views" },
  { value: "800+", numeric: 800, suffix: "+", label: "Videos shipped" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatItem({ numeric, suffix, label }: { numeric: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(numeric, 1800, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center py-10 px-8 text-center fade-in-section">
      <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
        {count}{suffix}
      </span>
      <span className="mt-3 text-sm text-secondary">{label}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-border py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {stats.map((s, idx) =>
              idx === 1 ? null : (
                <StatItem key={s.value} numeric={s.numeric} suffix={s.suffix} label={s.label} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
