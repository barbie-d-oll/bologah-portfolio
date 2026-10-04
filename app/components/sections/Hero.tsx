import Image from "next/image";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#172554]" />

      <Container className="relative z-10 flex min-h-screen items-center py-28 lg:py-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Content */}
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
              Full Stack Developer
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Barbara
              <br />
              Omaira Logah
            </h1>

            <h2 className="mb-6 text-xl font-medium text-gray-200 md:text-2xl">
             I am a Computer Engineering graduate and full stack developer focused on building practical web applications from the interface through to the backend.
            </h2>

            <p className="mb-9 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              I build web applications across the frontend and backend, working with React, Next.js, TypeScript, APIs, Node.js databases, and Firebase.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1E5AA8] px-7 py-3.5 font-medium text-white transition hover:bg-[#184B8C]"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white bg-transparent px-7 py-3.5 font-medium text-white transition hover:bg-white hover:text-[#0F172A]"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="hidden justify-end lg:flex">
            <div className="relative h-[560px] w-[420px] overflow-hidden rounded-3xl">
              <Image
                src="/images/profile.jpg"
                alt="Barbara Omaira Logah"
                fill
                priority
                className="object-cover object-top"
                sizes="420px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}