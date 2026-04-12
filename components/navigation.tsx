"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter">
          Fainted
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>

        <ul
          className={`fixed md:static inset-0 md:inset-auto top-16 md:top-0 bg-background md:bg-transparent flex flex-col md:flex-row gap-8 p-6 md:p-0 transition-all ${
            isOpen ? "opacity-100" : "hidden md:flex"
          }`}
        >
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-accent transition-colors"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-accent transition-colors"
            >
              My Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("process")}
              className="hover:text-accent transition-colors"
            >
              Process
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-accent transition-colors"
            >
              FAQ
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-accent transition-colors"
            >
              Let&apos;s Work Together
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
