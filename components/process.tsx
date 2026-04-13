export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Concept & Planning",
      description:
        "I start by understanding your audience, goals, and content style to build a concept tailored specifically to your niche. You simply send the brief via Discord.",
    },
    {
      number: "02",
      title: "Production",
      description:
        "I work with your raw footage, selecting the strongest moments and enhancing them with effects, transitions, sound design, and motion graphics to create a cinematic final product.",
    },
    {
      number: "03",
      title: "Refinement",
      description:
        "We review the first cut together, and I implement your feedback until the product is perfect.",
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "You receive a high-resolution, platform-optimized video ready to post and designed to perform.",
    },
  ];

  return (
    <section id="process" className="section-border py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-3 fade-in-section">
          <p className="text-accent text-sm font-medium tracking-widest uppercase">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">My Creative Process</h2>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            From concept to final delivery, every part of the process is designed for high-impact results and a hassle-free experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="fade-in-section group p-7 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              <span className="text-4xl font-bold text-accent/50 group-hover:text-accent transition-colors duration-300 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-secondary leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
