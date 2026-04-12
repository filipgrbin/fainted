"use client";

import { useState } from "react";

type Category = "All" | "Long Form" | "Short Form";

const workItems = [
  { title: "Gaming Montage", category: "Long Form" as const },
  { title: "Product Launch", category: "Short Form" as const },
  { title: "Documentary Edit", category: "Long Form" as const },
  { title: "TikTok Hook Reel", category: "Short Form" as const },
  { title: "YouTube Vlog", category: "Long Form" as const },
  { title: "Instagram Reel", category: "Short Form" as const },
];

const filters: Category[] = ["All", "Long Form", "Short Form"];

export default function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? workItems : workItems.filter((item) => item.category === active);

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">My Work</h2>
          <p className="text-secondary text-lg leading-relaxed">
            A selection of recent projects showcasing my editing style and creative direction.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                active === filter
                  ? "bg-accent text-background"
                  : "bg-secondary/20 text-foreground hover:bg-secondary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div key={`${item.title}-${index}`} className="group cursor-pointer">
              <div className="bg-secondary/10 aspect-video rounded-lg mb-3 flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary/30">{index + 1}</div>
                  <p className="text-secondary/50 text-sm mt-1">Placeholder Video</p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-secondary">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
