import Image from "next/image";
import Container from "../components/common/Container";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/profile.jpg"
        alt="Barbara Omaira Logah"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Hero Content */}
      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#D9A404]">
            Frontend Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Barbara
            <br />
            Omaira Logah
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-200">
            I build responsive, accessible and user-focused web applications
            using Next.js, React, TypeScript and Firebase.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#1E5AA8] px-7 py-4 font-medium text-white transition duration-300 hover:bg-[#184B8C]"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg border border-white px-7 py-4 font-medium text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}