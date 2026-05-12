const cvUrl = "/Jether-Balabagno-CV.pdf";

const contact = [
  "Davao City, Philippines",
  "+63 951 884 6704",
  "balabagnojether@gmail.com",
];

const skills = [
  "React",
  "TypeScript",
  "React Native",
  "JavaScript",
  "Next.js",
  "Python",
  "Selenium Python",
  "Prisma",
  "Git",
  "QA",
];

const experience = [
  {
    company: "Aquila Softwares Corporation",
    role: "Software Developer / Junior Tech Lead",
    period: "2022 - Current",
    points: [
      "Lead software development efforts and improve efficiency by troubleshooting and resolving coding issues.",
      "Identify and fix bugs before deployment to save time and reduce release risk.",
      "Mentor junior developers and collaborate with cross-functional teams on product delivery.",
    ],
  },
  {
    company: "PJC TECH Solutions",
    role: "Software Developer",
    period: "2025 - 2026",
    points: [
      "Contributed to full-stack application development and maintenance for client-facing systems.",
      "Built responsive interfaces and supported API-driven workflows using modern JavaScript tools.",
      "Collaborated with stakeholders to troubleshoot issues and deliver practical software improvements.",
    ],
  },
  {
    company: "PCBEE Corporation",
    role: "Fullstack Developer (Part Time)",
    period: "2025 - 2026",
    points: [
      "Designed, developed, and maintained the Job Order module for work order tracking and management.",
      "Built RESTful APIs and backend logic using Prisma ORM in Next.js.",
      "Implemented responsive front-end interfaces with React, Next.js, and TypeScript.",
    ],
  },
  {
    company: "Jagne-C Cosmetics Manufacturing",
    role: "Web Developer",
    period: "2022",
    points: [
      "Managed website design, content, SEO marketing, branding, and logo design.",
      "Worked with the development team to maintain and improve digital assets.",
    ],
  },
  {
    company: "Aquila Softwares Corporation",
    role: "Software Developer / Quality Assurance Tester Intern",
    period: "2022",
    points: [
      "Performed quality assurance tests and inspections for software products.",
      "Debugged software and hardware issues and prepared reports for development teams.",
      "Created reusable components to reduce duplication and simplify maintenance.",
    ],
  },
];

const education = [
  {
    school: "Bukidnon State University",
    course: "Bachelor of Science in Information Technology",
    period: "2018 - 2022",
  },
  {
    school: "Valencia National High School",
    course: "Technical Vocational Livelihood Strand",
    period: "2012 - 2018",
  },
];

export const metadata = {
  title: "CV | Jether Balabagno",
  description: "Curriculum vitae and work experience of Jether Balabagno.",
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
            Curriculum Vitae
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Jether B. Balabagno
          </h1>
          <p className="mt-4 text-lg text-slate-300">Software Developer</p>
          <p className="mt-6 leading-7 text-slate-300">
            Motivated software developer with experience in full-stack web
            development, automation testing, QA, and responsive user interface
            implementation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-100"
            >
              Open PDF
            </a>
            <a
              href={cvUrl}
              download
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {contact.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
              Technical Skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
                  Work Experience
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                  Experience Timeline
                </h2>
              </div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                2022 - Current
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {item.company}
                      </h3>
                      <p className="mt-1 font-semibold text-slate-600">
                        {item.role}
                      </p>
                    </div>
                    <p className="h-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
                Education
              </p>
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div key={item.school}>
                    <h3 className="font-bold text-slate-950">{item.school}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {item.course}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
                Languages
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">English</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Professional working proficiency
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-950">Filipino</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Native or bilingual proficiency
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
            <div className="border-b border-slate-200 p-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                Original CV Preview
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                The uploaded PDF is embedded here for quick viewing.
              </p>
            </div>
            <iframe
              src={cvUrl}
              title="Jether Balabagno CV PDF"
              className="h-[720px] w-full"
            />
          </section>
        </div>
      </section>
    </main>
  );
}
