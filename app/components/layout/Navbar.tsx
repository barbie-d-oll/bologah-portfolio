"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0F172A] shadow-md"
          : "border-gray-200 bg-[#FAFAF8] shadow-sm"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-[#D9A404]">BO</span>

            <span
              className={
                scrolled ? "text-[#F3F4F6]" : "text-[#1F2937]"
              }
            >
              LOGAH
            </span>
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[#F3F4F6] hover:text-[#D9A404]"
                      : "text-[#1F2937] hover:text-[#1E5AA8]"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-lg border px-5 py-2.5 text-sm font-medium transition md:inline-flex ${
              scrolled
                ? "border-[#F3F4F6] text-[#F3F4F6] hover:bg-[#F3F4F6] hover:text-[#0F172A]"
                : "border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white"
            }`}
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}