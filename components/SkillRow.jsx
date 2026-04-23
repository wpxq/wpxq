'use client';

export default function SkillRow({ category, skills, level }) {
  return (
    <div className="group border-b border-gray-900 py-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#050505] transition-colors px-2">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
        <span className="text-gray-600 font-mono text-xs uppercase tracking-widest w-24">
          {category}
        </span>
        
        <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tight group-hover:translate-x-2 transition-transform duration-300">
          {skills}
        </h3>
      </div>

      <span className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] mt-2 md:mt-0">
        {level}
      </span>
    </div>
  );
}
