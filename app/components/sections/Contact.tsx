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
            Let &apos;s work together.
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-300">
            I am open to opportunities where I can contribute to real
            software projects and continue growing as a full stack developer.
          </p>

          {/* Contact Details */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:darbynarhbarbie@gmail.com"
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#D9A404]/50 hover:bg-white/10"
            >
              <p className="mb-2 text-sm font-medium text-[#D9A404]">
                Email
              </p>

              <p className="break-all text-base text-gray-200">
                darbynarhbarbie@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+233544760528"
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#D9A404]/50 hover:bg-white/10"
            >
              <p className="mb-2 text-sm font-medium text-[#D9A404]">
                Phone
              </p>

              <p className="text-base text-gray-200">
                +233 544 760 528 
              </p>
            </a>
          </div>

          {/* Email Button */}
          <a
            href="mailto:darbynarhbarbie@gmail.com"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1E5AA8] px-7 py-3.5 font-medium text-white transition hover:bg-[#184B8C]"
          >
            Get In Touch
          </a>
        </div>
      </Container>
    </section>
  );
}