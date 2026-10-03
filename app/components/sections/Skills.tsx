import Container from "../common/Container";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Responsive Design", "Accessibility"],
  },
  {
    title: "Backend & Data",
    skills: ["Firebase", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "VScode", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F8FAFC] py-24 md:py-32 lg:py-36"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
            Skills
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            The technologies and tools I use to build, style, test, and
            maintain web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h3 className="mb-5 text-xl font-bold text-[#0F172A]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-[#FAFAF8] px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}