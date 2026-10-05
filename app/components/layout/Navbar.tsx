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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-[#D9A404]">BO</span>
            <span className="text-[#1F2937]">LOGAH</span>
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#1F2937] transition-colors hover:text-[#1E5AA8]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Download CV */}
          <a
            href="/cv.docx"
            download="Barbara-Omaira-Logah-CV.docx"
            className="hidden items-center justify-center rounded-lg border border-[#1E5AA8] bg-[#1E5AA8] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#184B8C] md:inline-flex"
          >
            Download CV
          </a>
        </nav>
      </Container>
    </header>
  );
}