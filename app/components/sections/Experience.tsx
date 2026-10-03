import Container from "../common/Container";

const experience = [
  {
    period: "National Service",
    role: "Software Development",
    description:
      "Worked on web applications and contributed to frontend development, database integration, testing, production fixes, and improving application reliability and usability.",
    highlights: [
      "Frontend development",
      "Database integration",
      "Testing and debugging",
      "Production fixes",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24 md:py-32 lg:py-36"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
            Experience
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            My Professional Journey
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            My experience has given me the opportunity to work on practical
            software projects and develop solutions for real-world needs.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl">
          {experience.map((item) => (
            <div
              key={item.role}
              className="relative border-l-2 border-[#1E5AA8] pl-8 md:pl-10"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#1E5AA8]" />

              <div className="rounded-2xl border border-gray-200 bg-[#FAFAF8] p-7 shadow-sm md:p-9">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#D9A404]">
                  {item.period}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">
                  {item.role}
                </h3>

                <p className="mb-7 max-w-3xl leading-8 text-gray-600">
                  {item.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9A404]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}