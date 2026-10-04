import Image from "next/image";
import Container from "../common/Container";

const projects = [
  {
    title: "EarnConnect",
    type: "Web Application",
    description:
      "A platform that connects workers and employers through a structured job marketplace. The application provides a simple way for workers to discover opportunities and for employers to find people for available tasks.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    focus: "Job marketplace",
    image: "/images/projects/earnconnect.png",
    link: "https://earnconnect.vercel.app/",
  },
  {
    title: "Digital Visitors Log",
    type: "Visitor Management System",
    description:
      "A digital visitor management system for registering visitors, handling check-in and checkout, managing appointments, staff and departments, notifications, and reporting.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    focus: "Visitor management",
    image: "/images/projects/digital-visitors-log.png",
    link: "https://digital2026.vercel.app/",
  },
  {
    title: "ServiceLink",
    type: "PWA",
    description:
      "A Progressive Web App designed to connect National Service personnel in Ghana with organizations offering placement and employment opportunities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "REST APIs",
    ],
    focus: "ServiceLink",
    image: "/images/projects/servicelink.png",
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
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">
            Selected Work
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            Featured Projects
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            A few projects I have worked on, from job platforms to
            business and visitor management systems.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                <div className="absolute bottom-4 left-4 rounded-md bg-[#0F172A]/90 px-3 py-1.5 text-xs font-medium text-white">
                  {project.focus}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7">
                <p className="mb-2 text-sm font-medium text-[#1E5AA8]">
                  {project.type}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-gray-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#1E5AA8] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#184B8C]"
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