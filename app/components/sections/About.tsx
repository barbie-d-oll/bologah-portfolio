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
              Building useful digital experiences.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-600">
            <p>
              I am a Computer Engineering graduate with a strong interest in
              frontend development and building practical web applications.
            </p>

            <p>
              My work focuses on creating interfaces that are responsive,
              accessible, easy to use, and connected to reliable backend
              systems.
            </p>

            <p>
              I enjoy turning ideas and real-world problems into functional
              digital products while continuously improving my technical
              skills through hands-on projects.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}