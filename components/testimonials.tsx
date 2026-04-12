"use client";

const testimonials = [
  {
    name: "Alex Carter",
    role: "YouTuber · 280K subscribers",
    text: "Matthew transformed my raw footage into something I'm genuinely proud of. The pacing, the color grading — everything just clicks. My watch time shot up 40% after switching to Fainted.",
  },
  {
    name: "Sofia Mares",
    role: "Founder · Nomad Brand Co.",
    text: "We needed a brand video that actually stopped the scroll. Fainted delivered exactly that. Every cut felt intentional and the turnaround was faster than any editor I've worked with.",
  },
  {
    name: "James Holloway",
    role: "Fitness Creator · 95K followers",
    text: "My short-form content went from average to elite. Matthew has a sharp eye for hooks and knows exactly what keeps people watching. Highly recommend for anyone serious about their content.",
  },
  {
    name: "Priya Nair",
    role: "E-commerce Founder · NairSkin",
    text: "The product videos Fainted edited for our launch campaign exceeded all expectations. Clean, cinematic, and on-brand. Our conversion rate on the landing page doubled.",
  },
  {
    name: "Leo Dubois",
    role: "Podcast Host · The Shift Pod",
    text: "I hand off raw interviews and get back polished episodes ready to publish. Matthew understands tone and storytelling on a level that's hard to find. Worth every penny.",
  },
  {
    name: "Camille Tran",
    role: "Travel Creator · 1.2M TikTok",
    text: "Fast, reliable, and genuinely talented. Fainted helped me scale from 2 videos a week to 5 without sacrificing quality. The editing style fits my brand perfectly.",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
          What clients say
        </h2>
      </div>

      {/* Gradient fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-5 marquee-track">
          {doubled.map((t, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-80 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-secondary text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-secondary text-xs mt-0.5">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
