'use client';

export default function Footer() {
    return (
        <footer className="py-20 mt-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            <a href="https://github.com/wpxq" target="blank_" rel="noopener noreferrer" className="hover:text-white transition">Github</a>
          </div>
        </footer>
    )
}
