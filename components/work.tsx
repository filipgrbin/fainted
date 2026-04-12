export default function Work() {
  const workItems = [
    { title: "Project 1", category: "Long Form" },
    { title: "Project 2", category: "Short Form" },
    { title: "Project 3", category: "Long Form" },
    { title: "Project 4", category: "Short Form" },
    { title: "Project 5", category: "Long Form" },
    { title: "Project 6", category: "Short Form" },
  ];

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">My Work</h2>
          <p className="text-secondary text-lg">
            A selection of recent projects showcasing my editing style and creative direction.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="px-6 py-2 bg-accent text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            All
          </button>
          <button className="px-6 py-2 bg-secondary/20 text-foreground rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors">
            Long Form
          </button>
          <button className="px-6 py-2 bg-secondary/20 text-foreground rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors">
            Short Form
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
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
