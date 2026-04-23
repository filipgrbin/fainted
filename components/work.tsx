"use client";

import { useState } from "react";

type Category = "All" | "Long Form" | "Short Form";

type WorkItem = {
  title: string;
  category: Category;
  youtubeId: string;
  url: string;
  short?: boolean;
};

const workItems: WorkItem[] = [
  {
    title: "Finance Re-Edit – Clean",
    category: "Short Form" as const,
    youtubeId: "dY4zlJvbAnw",
    url: "https://youtu.be/dY4zlJvbAnw",
    short: true,
  },
  {
    title: "Finance Re-Edit – Advanced",
    category: "Short Form" as const,
    youtubeId: "oiXdDq0x0fE",
    url: "https://youtu.be/oiXdDq0x0fE",
    short: true,
  },
  {
    title: "Retention Edit – Trial",
    category: "Short Form" as const,
    youtubeId: "mwriO-zyi_o",
    url: "https://youtube.com/shorts/mwriO-zyi_o",
    short: true,
  },
  {
    title: "Who am I",
    category: "Long Form" as const,
    youtubeId: "-zrXokX7LSw",
    url: "https://youtu.be/-zrXokX7LSw",
    short: false,
  },
  {
    title: "Faceless explainer Re-edit - Motion",
    category: "Short Form" as const,
    youtubeId: "tUXCqiQo3KE",
    url: "https://youtube.com/watch?v=tUXCqiQo3KE",
    short: true,
  },
  {
    title: "Bro turned into IShowSplash",
    category: "Short Form" as const,
    youtubeId: "",
    url: "https://youtube.com/shorts/T0a3g6f47oo",
    short: true,
  },
];

const filters: Category[] = ["All", "Long Form", "Short Form"];

export default function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? workItems : workItems.filter((item) => item.category === active);

  return (
    <section id="work" className="section-border py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-10">
        <div className="space-y-3 fade-in-section">
          <p className="text-accent text-sm font-medium tracking-widest uppercase">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">My Work</h2>
          <p className="text-secondary text-lg leading-relaxed">
            A selection of recent projects showcasing my editing style and creative direction.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap fade-in-section">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === filter
                ? "bg-accent text-background"
                : "bg-white/[0.05] border border-white/[0.08] text-foreground hover:border-accent/30"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <a
              key={item.youtubeId}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`relative rounded-xl overflow-hidden border border-white/[0.07] group-hover:border-accent/30 transition-all duration-300 ${item.short ? "aspect-[9/16]" : "aspect-video"}`}>
                <img
                  src={item.short ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg` : `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-secondary border border-white/[0.08] rounded-full px-3 py-1">
                  {item.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
