"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "My Work", id: "work" },
    { label: "Process", id: "process" },
    { label: "FAQ", id: "faq" },
  ];


  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/[0.07]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">Fainted</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-outline text-sm px-5 py-2 border border-accent/40 rounded-lg hover:bg-accent/10 transition-colors"
            >
              Let&apos;s Work Together
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-foreground" />
          <div className="w-6 h-0.5 bg-foreground" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/[0.07] px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-accent"
            >
              Let&apos;s Work Together
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
