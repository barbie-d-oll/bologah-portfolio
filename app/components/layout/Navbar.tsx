import Link from "next/link";
import Container from "../common/Container";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-[#D9A404]">BO</span>
            <span className="text-[#1E5AA8]">LOGAH</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1E5AA8]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-[#1E5AA8] px-4 py-2 text-sm font-medium text-[#1E5AA8] transition-colors hover:bg-[#1E5AA8] hover:text-white md:inline-flex"
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}