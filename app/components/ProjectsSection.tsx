import Image from "next/image";

type project = {
  title: string;
  description: string;
  link: string;
  image: string;
  sourceCode?: string | null;
  buttonText?: string | null;
};

const projects: project[] = [
  {
    title: "Efficient Planning",
    description:
      "A high performance planning app, built with Vite, React, .NET 9.0, and PostgreSQL",
    link: "https://planning.titanexperts.com",
    image: "/planning_app.png",
  },
  {
    title: "FitThera",
    description:
      "An AI-powered progress tracker for physical therapists, written in Blazor and Swift",
    link: "https://github.com/TheCircularK/FitTheraPortal",
    sourceCode: "https://github.com/TheCircularK/FitTheraPortal",
    image: "/physical_therapy.jpg",
  },
  {
    title: "Fantasy Name Generator",
    description: "A phoneme-based fantasy name generator, written in Rust",
    link: "https://github.com/TheCircularK/name_gen",
    sourceCode: "https://github.com/TheCircularK/name_gen",
    image: "/name_gen.png",
  },
  {
    title: "D&D Combat Manager",
    description: "Roll dice and handle conditions for dozens of characters",
    buttonText: "Coming Soon",
    link: "#",
    image: "/dnd.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                  >
                    {project.buttonText ? project.buttonText : "View Project →"}
                  </a>
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white font-medium text-sm sm:text-base"
                    >
                      Source Code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
