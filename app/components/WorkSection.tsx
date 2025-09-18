type WorkExperience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  projects: string[];
};

export default function WorkSection() {
  const experiences: WorkExperience[] = [
    {
      company: "eAssist Dental Solutions",
      title: "Full-Stack Software Engineer",
      startDate: "March 2025",
      endDate: "August 2025",
      projects: [
        "Built secure auth system with JWT + session management, safeguarding 1,500+ employee accounts (Node.js, MongoDB)",
        "Automated deployments with Docker + GitHub Actions, cutting ~30 mins per release",
        "Developed internal ticketing platform for 1,500 employees (React, TypeScript, MongoDB)",
        "Automated time tracking with AI, saving ~300 hours/week (Python, FastAPI, Google Gemini)",
      ],
    },
    {
      company: "Larson Davis",
      title: "Software Engineer",
      startDate: "June 2022",
      endDate: "March 2025",
      projects: [
        "Created production tracking system, saving 25+ hours/week (C#, .NET, Blazor, EF Core, SQL Server)",
        "Built training compliance system for ISO requirements (C#, .NET, Blazor, EF Core, SQL Server)",
        "Developed online RMA portal to streamline repair workflows (ASP.NET, jQuery, SQL Server)",
        "Enabled remote sound level meter access via secure HTTP proxy (C#, Svelte, Nginx)",
      ],
    },
    {
      company: "Bear Country Bees",
      title: "Software Engineering Intern",
      startDate: "January 2022",
      endDate: "April 2022",
      projects: [
        "Built IoT beehive tracker with RAK4200 + AWS Lambda, alerting owners of hive movement (RAK4200, AWS Lambda, PostgreSQL)",
      ],
    },
    {
      company: "Resol",
      title: "Business Intern",
      startDate: "May 2021",
      endDate: "July 2021",
      projects: [
        "Designed and delivered business training curriculum for 30+ new entrepreneurs/month (Finance, Marketing, Accounting)",
      ],
    },
  ];

  return (
    <section className="bg-gray-800 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Work History
        </h2>

        <div className="relative">
          {/* Vertical line (left on mobile, center on desktop) */}
          <div className="absolute left-6 sm:left-1/2 top-0 h-full w-1 bg-gray-600 -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full"
            >
              {/* Desktop alternating */}
              {index % 2 === 0 ? (
                <>
                  {/* Left card (desktop), right card (mobile) */}
                  <div className="sm:w-5/12 sm:bg-gray-700 sm:p-6 sm:rounded-lg sm:shadow-sm sm:hover:shadow-md sm:transition-shadow sm:text-gray-200 sm:block hidden">
                    <h3 className="text-lg font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-blue-400">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      {experience.startDate} – {experience.endDate}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {experience.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Dot */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-gray-800 sm:mx-0 mx-2"></div>

                  {/* Spacer (desktop only) */}
                  <div className="sm:w-5/12 hidden sm:block"></div>
                </>
              ) : (
                <>
                  <div className="sm:w-5/12 hidden sm:block"></div>

                  {/* Dot */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-gray-800 sm:mx-0 mx-2"></div>

                  {/* Right card (desktop), right card (mobile) */}
                  <div className="sm:w-5/12 sm:bg-gray-700 sm:p-6 sm:rounded-lg sm:shadow-sm sm:hover:shadow-md sm:transition-shadow sm:text-gray-200 sm:block hidden">
                    <h3 className="text-lg font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-blue-400">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      {experience.startDate} – {experience.endDate}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {experience.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Mobile version: always right-aligned card */}
              <div className="ml-14 sm:hidden bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-200 mt-4">
                <h3 className="text-lg font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="text-sm text-blue-400">{experience.company}</p>
                <p className="text-xs text-gray-400 mb-3">
                  {experience.startDate} – {experience.endDate}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {experience.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
