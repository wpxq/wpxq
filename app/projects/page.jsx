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
            <span className="flex items-center gap-1">
                updateit 
                <span className="text-white ml-2">[</span>
                <span className="text-blue-800 font-normal">I personally use it</span>
                <span className="text-white">]</span>
            </span>
            }
            description="CLI tool to update all packages from listed package managers."
            url="https://github.com/wpxq/updateit"
          />
        <ProjectRow 
            number="02" 
            title={
            <span className="flex items-center gap-1">
                friends-export 
                <span className="text-white ml-2">[</span>
                <span className="text-blue-800 font-normal">I personally use it</span>
                <span className="text-white">]</span>
            </span>
            }
            description="Export Friends List from Discord."
            url="https://github.com/wpxq/friends-export"
          />
        <ProjectRow 
            number="03" 
            title="MintzCheatz"
            description="E-Shop with Spoofers & Cheats, it was for my friend."
            url="https://github.com/wpxq/mintzcheatz"
          />
          <ProjectRow
            number="04"
            title="DIL-Tool"
            description="Discord Invite Lookup Tool // CLI Version"
            url="https://github.com/wpxq/DIL-Tool"
            />
            <ProjectRow
            number="05"
            title="DIL-Tool-V2"
            description="Discord Invite Lookup Tool // WEB Version"
            url="https://github.com/wpxq/DIL-Tool-V2"
            />
            <ProjectRow
            number="06"
            title="DockerTelegramBot"
            description="Docker Bot for Telegram that uses a command to list which containers are running and which are not"
            url="https://github.com/wpxq/DockerTelegramBot"
            />
            <ProjectRow
            number="07"
            title="TelegramToDiscord"
            description="A Telegram bot that sends messages and images or videos to a Discord webhook, in case you have a limit on your Discord account"
            url="https://github.com/wpxq/TelegramToDiscord"
            />
            <ProjectRow
            number="08"
            title={
            <span className="flex items-center gap-1">
                ppush 
                <span className="text-white ml-2">[</span>
                <span className="text-blue-800 font-normal">I personally use it</span>
                <span className="text-white">]</span>
            </span>
            }
            description="lightweight Python automation script designed to streamline your Git workflow. Stop typing three commands repeatedly—do it all with one"
            url="https://github.com/wpxq/ppush"
            />
            <ProjectRow
            number="09"
            title="Guardian API"
            description="A lightweight, production-ready FastAPI backend designed for Docker infrastructure monitoring and real-time container observability."
            url="https://github.com/wpxq/guardian-api"
            />
            <ProjectRow
            number="10"
            title="WMUSIC"
            description=" Minimalistic streamer running on docker."
            url="https://github.com/wpxq/w-music"
            />
            <ProjectRow
            number="11"
            title={
            <span className="leading-tight">
                Messages deleter for Discord{' '}
            <span className="whitespace-nowrap">
                <span className="text-white ml-2">[</span>
                <span className="text-blue-800 font-normal">I personally use it</span>
                <span className="text-white">]</span>
              </span>
            </span>
            }
            description="In case if you have any messages on the server or in private messages that violate the terms of service."
            url="https://github.com/wpxq/DC-Messages-Remover"
            />
            <ProjectRow
            number="12"
            title="W-Cards"
            description="A minimalist, high-performance Progressive Web App (PWA) designed to store loyalty cards and barcodes."
            url="https://github.com/wpxq/w-cards"
            />
            <ProjectRow
            number="13"
            title={
            <span className="flex items-center gap-1">
                IdeasBot 
                <span className="text-white ml-2">[</span>
                <span className="text-blue-800 font-normal px-1">I personally use it</span>
                <span className="text-white">]</span>
            </span>
            }
            description="A lightweight, secure, and private Telegram bot designed for quick brainstorming and idea logging. Perfect for developers who want to keep their thoughts organized in a simple text file on their own infrastructure."
            url="https://github.com/wpxq/ideas-bot"
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