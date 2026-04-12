export default function Footer() {
  return (
    <footer className="border-t border-secondary/20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-sm">
          © 2024 Fainted. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Twitter
          </a>
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Discord
          </a>
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Instagram
          </a>
          <a href="mailto:matthew@fainted.studio" className="text-secondary hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
