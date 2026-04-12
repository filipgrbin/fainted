export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="inline-block">
          <span className="px-4 py-2 rounded-full bg-secondary/10 text-accent text-sm font-medium border border-accent/20">
            Accepting new creators
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            From Raw Footage To Content That Performs
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            I help creators turn raw footage into top-quality content that captures attention and performs across platforms. From long-form storytelling to high-energy shorts, every edit is crafted to engage viewers and elevate your content.
          </p>
        </div>

        <div className="pt-8">
          <video
            className="w-full rounded-lg"
            autoPlay
            muted
            loop
            controls
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <button
            onClick={() => scrollToSection("work")}
            className="px-8 py-4 bg-accent text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-accent/30 text-foreground font-medium rounded-lg hover:bg-accent/10 transition-colors"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
