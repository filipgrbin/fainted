"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your turnaround time?",
      answer:
        "Usually 3–4 days, depending on the complexity of the project.",
    },
    {
      question: "What's your pricing?",
      answer:
        "Pricing depends on the complexity and scope of the project. Let's discuss your needs and find the best option for you.",
    },
    {
      question: "What if I don't like the edit?",
      answer:
        "I include revisions to ensure the final result matches your expectations and vision.",
    },
    {
      question: "Do you work with long-term clients?",
      answer:
        "Yes, I offer long-term collaborations for creators and brands looking for consistent, high-quality content.",
    },
    {
      question: "What type of video do you edit?",
      answer:
        "I edit a wide range of content, including finance, gaming, podcasts, entertainment and documentaries. No matter the niche, I craft edits that match your vision and help your content stand out.",
    },
    {
      question: "How do I send my footage?",
      answer:
        "You can send footage via Google Drive, Dropbox, or WeTransfer. Final deliveries are typically sent via WeTransfer, but other methods can be arranged if needed.",
    },
    {
      question: "What software do you use for editing?",
      answer:
        "Adobe Premiere Pro and After Effects.",
    },
  ];

  return (
    <section id="faq" className="section-border py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-3 fade-in-section">
          <p className="text-accent text-sm font-medium tracking-widest uppercase">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Everything You Need To Know
          </h2>
          <p className="text-secondary text-base">Still have questions?</p>
          <a
            href="mailto:matthew@fainted.studio"
            className="inline-block text-base"
          >
            <span className="text-secondary">Email</span>{" "}
            <span className="text-accent hover:underline">matthew@fainted.studio</span>
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="fade-in-section group border border-white/[0.07] rounded-xl overflow-hidden hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left font-semibold flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-secondary text-sm leading-relaxed border-t border-white/[0.05]">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
