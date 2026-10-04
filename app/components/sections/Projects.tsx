import Container from "../common/Container";

const projects = [
  {
    title: "EarnConnect",
    type: "Web Application",
    description:
      "A platform that connects workers and employers through a structured job marketplace. The application includes separate experiences for workers and employers.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS", "ExpressPay Ghana API"],
    focus: "Job marketplace",
    link: "https://earnconnect.vercel.app/",
  },
  {
    title: "Digital Visitors Log",
    type: "Visitor Management System",
    description:
      "A digital visitor management system for registering visitors, handling check-in and checkout, managing appointments, staff and departments, sending notifications, and generating reports.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "SMS Online GH API"],
    focus: "Visitor management",
    link: "https://digital2026.vercel.app/",
  },
  {
  title: "ServiceLink",
  type: "PWA",
  description: 
  "ServiceLink is a Progressive Web App (PWA) designed to connect National Service personnel in Ghana with organizations offering placement and employment opportunities. The platform helps users discover suitable opportunities, manage their profiles, and connect with organizations through a centralized digital system.",
  technologies: ["Next.js","React","TypeScript", "Tailwind CSS","Firebase", "REST APIs"],
  focus: "ServiceLink",
  link: "https://servicelink.vercel.app/",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F8FAFC] py-24 md:py-32 lg:py-36"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
            Selected Work
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Featured Projects
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            A few projects I have worked on, from job platforms to
            internal business systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-[#111827] p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9A404]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-2/3 rounded bg-white/10" />
                    <div className="h-3 w-1/2 rounded bg-white/10" />

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-lg bg-white/5" />
                      <div className="h-20 rounded-lg bg-white/5" />
                      <div className="h-20 rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-6 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300">
                  {project.focus}
                </div>
              </div>

              <div className="p-7 md:p-8">
                <p className="mb-2 text-sm font-medium text-[#1E5AA8]">
                  {project.type}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">
                  {project.title}
                </h3>

                <p className="mb-7 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-gray-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-[#1E5AA8] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#184B8C]"
                >
                  View Project
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}