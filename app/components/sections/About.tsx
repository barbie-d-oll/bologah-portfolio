import Container from "../common/Container";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
              About Me
            </p>
  <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
              Building useful web applications.
            </h2>
          </div>

          {/* About Content */}
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-600">
            <p>
              I am a Computer Engineering graduate and full stack developer
              focused on building practical web applications from the
              interface through to the backend.
            </p>

            <p>
              I work with technologies such as React, Next.js, TypeScript,
              Firebase,mysql and prisma, databases, and APIs to build applications that are
              responsive, functional, and easy to use.
            </p>

            <p>
              I enjoy turning ideas and real-world problems into functional
              digital products while continuously improving my technical
              skills through hands-on development.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}