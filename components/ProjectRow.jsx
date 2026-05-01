'use client';

export default function ProjectRow({ number, title, description, url}) {
  return (
    <div className="group border-b border-gray-900 py-10 flex justify-between items-center cursor-pointer hover:bg-[#0a0a0a] transition-all px-4">
      <div className="flex items-center gap-10">
        <span className="font-mono text-xs text-gray-600">{number}</span>
        
        <div className="flex flex-col">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-500">
          <h3 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
          </a>
          <span className="text-gray-500 text-sm mt-1 font-light tracking-wide group-hover:translate-x-2 transition-transform duration-300 delay-75">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
