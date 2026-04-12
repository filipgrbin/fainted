"use client";

const testimonials = [
  {
    name: "Alex Carter",
    role: "YouTuber",
    subscribers: "280K subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Matthew transformed my raw footage into something I'm genuinely proud of. The pacing, the color grading — everything just clicks. My watch time shot up 40% after switching to Fainted.",
  },
  {
    name: "Sofia Mares",
    role: "Nomad Brand Co.",
    subscribers: "1.1M subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "We needed a brand video that actually stopped the scroll. Fainted delivered exactly that. Every cut felt intentional and the turnaround was faster than any editor I've worked with.",
  },
  {
    name: "James Holloway",
    role: "Fitness Creator",
    subscribers: "950K subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "My short-form content went from average to elite. Matthew has a sharp eye for hooks and knows exactly what keeps people watching. Highly recommend for anyone serious about their content.",
  },
  {
    name: "Priya Nair",
    role: "NairSkin",
    subscribers: "500K subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "The product videos Fainted edited for our launch campaign exceeded all expectations. Clean, cinematic, and on-brand. Our conversion rate on the landing page doubled.",
  },
  {
    name: "Leo Dubois",
    role: "The Shift Pod",
    subscribers: "1.7M subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "I hand off raw interviews and get back polished episodes ready to publish. Matthew understands tone and storytelling on a level that's hard to find. Worth every penny.",
  },
  {
    name: "Camille Tran",
    role: "Travel Creator",
    subscribers: "1.2M subscribers",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Fast, reliable, and genuinely talented. Fainted helped me scale from 2 videos a week to 5 without sacrificing quality. The editing style fits my brand perfectly.",
  },
];

const doubled = [...testimonials, ...testimonials];

const stats = [
  { value: "200%", label: "More views. On average." },
  { value: "15%", label: "CTR boost from our thumbnails" },
  { value: "5x", label: "Better engagement with our hooks" },
  { value: "30%", label: "More reach. Real SEO." },
];

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

      {/* Infinite marquee */}
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
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full bg-secondary/20 object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-secondary text-xs mt-0.5">{t.role} · {t.subscribers}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Creators trust bar + stats from image */}
      <div className="mt-20">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFej2uzkrAIfjzPQcHAPXnONdhK6MZ.png"
          alt="Creators who trust Fainted — subscriber counts and performance stats"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
