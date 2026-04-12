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
        "I work with your raw footage, selecting the strongest moments and enhancing them with effects, transitions, sound design, and motion graphics to create a cinematic and engaging final product.",
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
    <section id="process" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">My Creative Process</h2>
          <p className="text-secondary text-lg max-w-2xl">
            From concept to final delivery, every part of the process is designed for high-impact results and a hassle-free experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-accent">{step.number}</span>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
