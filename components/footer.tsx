export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Fainted Studio.{" "}
          <a
            href="https://www.linkedin.com/in/filipgrbin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Built by @grbinek
          </a>
        </p>
      </div>
    </footer>
  );
}
