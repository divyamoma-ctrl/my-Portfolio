import { useEffect, useState } from "react";
import {
  
  Mail,
  MapPin,
  // ExternalLink,
  Code2,
  User,
  Briefcase,
  GraduationCap,
  
  Menu,
  X,
} from "lucide-react";
import profileImage from "./assets/Profile_img.png";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}



const App = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/divyamoma-ctrl/repos",
        );

        const data = await response.json();
        console.log("Response Data:", response);

        setRepos(data);
      } catch (error) {
        console.log("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}

          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-white"
          >
            Divya<span className="text-blue-500">pushpaa</span>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#education"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-700 p-2 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <nav className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                Education
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ================= HOME ================= */}

      <section id="home" className="flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* Introduction */}

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Divyapushpaa Das
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
              Frontend Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build responsive and user-friendly web applications using modern
              frontend technologies. I enjoy learning new technologies and
              turning ideas into practical projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                View Projects
              </a>

              <a
                href="https://github.com/divyamoma-ctrl"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                {/* <Github size={18} /> */}
                GitHub
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={17} />
              Howrah, West Bengal, India
            </div>
          </div>

          {/* Profile Image */}
          {/* 
          <div className="flex justify-center md:justify-end">
            <div className="flex h-72 w-72 items-center justify-center rounded-full border border-slate-700 bg-slate-900 sm:h-80 sm:w-80">
              <div className="text-center">
               <img src={profileImage}/>
              </div>
            </div>
          </div> */}

          {/* Profile Image */}
          {/* <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-blue-500 to-violet-500 opacity-40 blur-2xl" />

              <div className="relative rounded-full bg-linear-to-tr from-blue-500 via-cyan-400 to-violet-500 p-1.5">
                <div className="rounded-full bg-slate-950 p-2">
                  <img
                    src={profileImage}
                    alt="Divyapushpaa Das"
                    className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Profile Image */}
          {/* <div className="flex justify-center md:justify-end">
            <div className="relative">
            
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#3b82f6,#a855f7,#3b82f6)] opacity-30 blur-xl" />

             
              <div className="relative rounded-full bg-[conic-gradient(from_45deg,#3b82f6_0%,#06b6d4_25%,#a855f7_50%,#ec4899_75%,#3b82f6_100%)] p-[5px]">
                
                <div className="rounded-full bg-slate-950 p-2">
                  <img
                    src={profileImage}
                    alt="Divyapushpaa Das"
                    className="h-60 w-60 rounded-full bg-slate-200 object-cover object-top sm:h-72 sm:w-72"
                  />
                </div>
              </div>
            </div>
          </div> */}
{/* Profile Image */}
<div className="flex justify-center md:justify-end">
  <div className="relative h-72 w-72 sm:h-80 sm:w-80">
    {/* Glow: sits behind the photo, never on top of it */}
    <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-3xl" />

    {/* Photo */}
    <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-blue-500 bg-white">
      <img
        src={profileImage}
        alt="Divyapushpaa Das"
        className="h-full w-full object-cover object-top"
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="border-t border-slate-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle icon={<User size={22} />} title="About Me" />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                A passionate developer who loves learning.
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                I am a fresher developer with a strong interest in web
                development. I enjoy creating responsive websites and
                interactive web applications.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                I am continuously improving my programming skills through
                practical projects and hands-on learning. My current focus is
                frontend development with React and TypeScript.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">What I enjoy</h3>

              <ul className="mt-5 space-y-4 text-slate-400">
                <li>• Building responsive user interfaces</li>
                <li>• Working with APIs</li>
                <li>• Learning new technologies</li>
                <li>• Solving programming problems</li>
                <li>• Creating practical projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="bg-slate-900/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle icon={<Code2 size={22} />} title="Skills" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <SkillCard
              title="Frontend"
              skills={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Material UI",
              ]}
            />

            <SkillCard
              title="API & Forms"
              skills={["Axios", "React Hook Form", "Yup", "Authentication"]}
            />
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle icon={<Briefcase size={22} />} title="My Projects" />

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            These projects are fetched dynamically from my GitHub account using
            the GitHub API.
          </p>

          {loading ? (
            <p className="mt-12 text-center text-slate-400">
              Loading projects...
            </p>
          ) : repos.length === 0 ? (
            <p className="mt-12 text-center text-slate-400">
              No public repositories found.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-slate-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <FaGithub className="text-blue-500" size={25} />

                    {repo.language && (
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {repo.name}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                    {repo.description || "No description available."}
                  </p>
                  {/* 
                  <div className="mt-5 flex gap-5 text-xs text-slate-500">
                    <span> {repo.stargazers_count}</span>
                    <span>Forks: {repo.forks_count}</span>
                  </div> */}

               

                  <div className="mt-6 flex gap-3">
                    {/* Repository */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
                    >
                      Visit Repository
                      <FaGithub size={16} />
                    </a>

                   
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="bg-slate-900/40 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle icon={<GraduationCap size={22} />} title="Education" />

          {/* <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-7">
            <h3 className="text-xl font-semibold text-white">
              Bachelor of Technology — Information Technology
            </h3>

            <p className="mt-3 text-slate-400">
              Narula Institute of Technology
            </p>

            <p className="mt-2 text-sm text-slate-500">
              2019
            </p>
          </div> */}

          <div className="mt-10 space-y-5">
            {/* Bachelor's Degree */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Technology — Information Technology
              </h3>

              <p className="mt-3 text-slate-400">
                Narula Institute of Technology
              </p>

              <p className="mt-2 text-sm text-slate-500">Percentage: 75%</p>
            </div>

            {/* Higher Secondary */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-semibold text-white">
                Higher Secondary
              </h3>

              <p className="mt-3 text-sm text-slate-500">Percentage: 75.40%</p>
            </div>

            {/* Secondary */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
              <h3 className="text-xl font-semibold text-white">Secondary</h3>

              <p className="mt-3 text-sm text-slate-500">Percentage: 86.71%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      {/* 
      <section id="certifications" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle icon={<Award size={22} />} title="Certifications" />

          <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-7">
            <p className="text-slate-400">Add your certifications here.</p>

            <p className="mt-3 text-sm text-slate-500">
              Example: Frontend Development — Webskitters Academy
            </p>
          </div>
        </div>
      </section> */}

      {/* ================= CONTACT ================= */}

      <section id="contact" className="border-t border-slate-900 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle icon={<Mail size={22} />} title="Let's Connect" />

          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
            I am open to learning opportunities, internships, and junior
            frontend developer opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="divyamoma@gmail.com"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://github.com/divyamoma-ctrl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/divyapushpaa-das-673077185"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Divyapushpaa Das. All rights reserved.</p>

          <p>Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

/* ================= SECTION TITLE ================= */

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-blue-500">{icon}</span>

      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
};

/* ================= SKILL CARD ================= */

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
