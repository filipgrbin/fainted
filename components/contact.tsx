"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind? Fill out the form and let&apos;s bring your ideas to life with top-quality editing.
          </p>
        </div>

        <form className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Type</label>
            <select className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground">
              <option>Select project type</option>
              <option>Long Form Video</option>
              <option>Short Form Video</option>
              <option>Podcast</option>
              <option>Gaming Content</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Details</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full px-4 py-3 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-secondary/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-sm text-secondary mb-2">Email</p>
              <a
                href="mailto:matthew@fainted.studio"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                matthew@fainted.studio
              </a>
            </div>
            <div>
              <p className="text-sm text-secondary mb-2">Follow</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  X
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Discord
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
