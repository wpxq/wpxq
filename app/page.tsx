import Image from "next/image";
import Footer from '@/components/Footer';
import ProjectRow from '@/components/ProjectRow';

export default function Home() {
  return (
    <div className="bg-gray text-white selection:bg-white selection:text-black min-h-screen font-sans antialiased">
      <main className="max-w-4xl mx-auto px-6 pt-32">
      <section className="mb-40">
  <div className="flex items-end gap-6 md:gap-10">
    <div className="relative w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-2xl border-2 border-white translate-y-4">
      <Image src="/images/pfp.jpg" alt="Profile" className="object-cover" fill priority />
    </div>

    <div className="flex flex-col">
      <h1 className="text-6xl md:text-[140px] font-bold leading-[0.75] tracking-tighter uppercase italic">
        w`
      </h1>
      <p className="text-gray-500 font-mono text-sm md:text-base mt-4 ml-2 tracking-[0.2em] uppercase">
        Learning Next.js & Linux user
      </p>
    </div>
  </div>
</section>

        <section className="space-y-0 border-t border-gray-900">
          <ProjectRow 
            number="01" 
            title="updateit"
            description="CLI tool to update all packages from listed package managers."
            url="https://github.com/wpxq/updateit"
          />
        <ProjectRow 
            number="02" 
            title="friends-export"
            description="Export Friends List from Discord."
            url="https://github.com/wpxq/friends-export"
          />
        <ProjectRow 
            number="03" 
            title="MintzCheatz"
            description="E-Shop with Spoofers & Cheats, it was for my friend."
            url="https://github.com/wpxq/mintzcheatz"
          />
        </section>

        <Footer />
      </main>
    </div>
  );
}
