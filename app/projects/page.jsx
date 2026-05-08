import ProjectRow from "@/components/ProjectRow";
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans antialiased">
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
    <div className="mt-24 mb-10 ml-2">
      <h2 className="text-4xl md:text-6xl font-bold uppercase italic tracking-tighter text-gray-200 opacity-50">
        All Projects
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
            title="MintzCheatz"
            description="E-Shop with Spoofers & Cheats, it was for my friend."
            url="https://github.com/wpxq/mintzcheatz"
          />
            <ProjectRow
            number="03"
            title="DockerTelegramBot"
            description="Docker Bot for Telegram that uses a command to list which containers are running and which are not"
            url="https://github.com/wpxq/DockerTelegramBot"
            />
            <ProjectRow
            number="04"
              title={
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-bold">ppush</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
                    I personally use it
                  </span>
                </div>
              }
            description="lightweight Python automation script designed to streamline your Git workflow. Stop typing three commands repeatedly—do it all with one"
            url="https://github.com/wpxq/ppush"
            />
            <ProjectRow
            number="05"
            title="Guardian API"
            description="A lightweight, production-ready FastAPI backend designed for Docker infrastructure monitoring and real-time container observability."
            url="https://github.com/wpxq/guardian-api"
            />
            <ProjectRow
            number="06"
            title="WMUSIC"
            description=" Minimalistic streamer running on docker."
            url="https://github.com/wpxq/w-music"
            />
            <ProjectRow
            number="07"
            title="W-Cards"
            description="A minimalist, high-performance Progressive Web App (PWA) designed to store loyalty cards and barcodes."
            url="https://github.com/wpxq/w-cards"
            />
            <ProjectRow
            number="08"
              title={
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-bold">IdeasBot</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
                    I personally use it
                  </span>
                </div>
              }
            description="A lightweight, secure, and private Telegram bot designed for quick brainstorming and idea logging. Perfect for developers who want to keep their thoughts organized in a simple text file on their own infrastructure."
            url="https://github.com/wpxq/ideas-bot"
            />
            <ProjectRow
            number="09"
              title={
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-bold">MoviesRemind</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
                    I personally used it
                  </span>
                </div>
              }
            description="A minimalist movie watchlist to keep track of films you want to see. Built with FastAPI, SQLite, and Tailwind CSS. This project is fully 'dockerized' for easy deployment."
            url="https://github.com/wpxq/moviesremind"
            />
            <ProjectRow
              number="10"
              title={
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-bold">SSH-Notifier-Telegram</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
                    I personally use it
                  </span>
                </div>
              }
              description="A lightweight and efficient Python bot running in Docker that monitors successful & failed SSH login attempts in real-time and instantly notifies you via Telegram."
              url="https://github.com/wpxq/ssh-notifier-telegram"
            />
            <ProjectRow
              number="11"
              title="xqmap"
              description="A concurrent network port scanner written in Go, designed for DevOps and CyberSecurity enthusiasts. It features high-speed TCP scanning using goroutines, service detection, and colorized output for better readability."
              url="https://github.com/wpxq/xqmap"
              />
            </section>
      <a href="/" className="mt-12 inline-block text-gray-400 hover:text-white">
        ← Back to Home
      </a>
      <Footer />
    </main>
  </div>
  );
}