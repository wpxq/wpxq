import Image from "next/image";
import Footer from '@/components/Footer';
import ProjectRow from '@/components/ProjectRow';
import SkillRow from '@/components/SkillRow';

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans antialiased">
      <main className="max-w-4xl mx-auto px-6 pt-32">
      <section className="mb-40">
  <div className="flex items-end gap-6 md:gap-10">
    <div className="relative w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-2xl border-2 border-white translate-y-4">
      <Image src="/images/profile.jpg" alt="Profile" className="object-cover" fill priority sizes="(max-width: 768px) 96px, 160px"/>
    </div>

  <div className="flex flex-col">
  <h1 className="text-6xl md:text-[140px] font-bold leading-[0.75] tracking-tighter uppercase italic">
    w`
  </h1>
  <p className="text-gray-500 font-mono text-sm md:text-base mt-4 ml-2 tracking-[0.2em] uppercase">
    Linux User & Programmer
  </p>
</div>
  </div>
</section>

    <div className="mt-24 mb-10 ml-2">
      <h2 className="text-4xl md:text-6xl font-bold uppercase italic tracking-tighter text-gray-200 opacity-50">
        Skills
      </h2>
      <div className="h-[2px] w-12 bg-gray-900 mt-2"></div>
    </div>

        <section className="border-t border-gray-900">
          <SkillRow
            category="Front-End"
            skills="Next.js / Tailwindcss"
            level="[ Learning ]"
          />
          <SkillRow
            category="Scripting"
            skills="Python"
            level="[ 2022 - Present ]"
          />
        </section>

    <div className="mt-24 mb-10 ml-2">
      <h2 className="text-4xl md:text-6xl font-bold uppercase italic tracking-tighter text-gray-200 opacity-50">
        Projects
      </h2>
      <div className="h-[2px] w-12 bg-gray-900 mt-2"></div>
    </div>

<section className="space-y-0 border-t border-gray-900">
  <ProjectRow 
    number="01"
    title={
      <div className="flex items-center flex-wrap gap-2">
      <span className="font-bold">updateit</span>
      <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
      I personally use it
      </span>
    </div>
  }
    description="CLI tool to update all packages from listed package managers."
    url="https://github.com/wpxq/updateit"
  />
  <ProjectRow 
    number="02"
    title={
      <div className="flex items-center flex-wrap gap-2">
      <span className="font-bold">ppush</span>
      <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
      I personally use it
      </span>
    </div>
  }
    description="lightweight Python automation script designed to streamline your Git workflow. Stop typing three commands repeatedly—do it all with one."
    url="https://github.com/wpxq/ppush"
  />
  <ProjectRow
    number="03"
    title="Guardian API"
    description="A lightweight, production-ready FastAPI backend designed for Docker infrastructure monitoring and real-time container observability."
    url="https://github.com/wpxq/guardian-api"
  />
  <div className="py-8 border-t border-gray-900 text-center">
    <a 
      href="/projects" 
      className="inline-block text-sm font-mono text-gray-500 hover:text-white transition-colors duration-200"
    >
      [ View all projects ]
    </a>
  </div>
</section>
        <Footer />
      </main>
    </div>
  );
}