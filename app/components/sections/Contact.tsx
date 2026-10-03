import Container from "../common/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0F172A] py-24 text-white md:py-32 lg:py-36"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Let work together.
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-300">
            I am open to opportunities where I can contribute to real
            software projects and continue growing as a developer.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center rounded-lg bg-[#1E5AA8] px-7 py-3.5 font-medium text-white transition hover:bg-[#184B8C]"
          >
            Get In Touch
          </a>
        </div>
      </Container>
    </section>
  );
}