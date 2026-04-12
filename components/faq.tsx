"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your turnaround time?",
      answer:
        "Usually 2–3 days, depending on the complexity of the project.",
    },
    {
      question: "What's your pricing?",
      answer:
        "Pricing depends on the complexity and scope of the project. Let's discuss your needs and find the best option for you.",
    },
    {
      question: "What If I don't like the edit?",
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
        "I edit a wide range of content, including vlogs, gaming, podcasts, entertainment and documentaries. No matter the niche, I craft edits that match your vision and help your content stand out.",
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
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">Everything You Need To Know</h2>
          <p className="text-secondary text-lg">
            Still have questions? Email{" "}
            <a
              href="mailto:matthew@fainted.studio"
              className="text-accent hover:underline"
            >
              matthew@fainted.studio
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-secondary/20 rounded-lg overflow-hidden hover:border-accent/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:bg-secondary/5 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-accent transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary/5 border-t border-secondary/20 text-secondary">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
