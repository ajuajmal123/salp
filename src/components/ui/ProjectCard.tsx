import React from "react";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  name: string;
  category: string;
  location: string;
  imageUrl: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  description: string;
}

export default function ProjectCard({
  slug,
  name,
  category,
  location,
  imageUrl,
  status,
  description,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block cursor-pointer">
      <div className="group relative overflow-hidden bg-[#1c1a17] border border-white/10 hover:border-sapl-blue/50 rounded-xl shadow-lg hover:shadow-2xl h-[440px] flex flex-col justify-end transition-all duration-500">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#1c1a17] flex items-center justify-center border border-white/5 relative">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#afa99e]/20 absolute inset-0 flex items-center justify-center select-none text-center px-4 leading-normal">
                no image added
              </span>
            </div>
          )}
          {/* High-Contrast Premium Gradient Overlay for Guaranteed 100% Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/85 to-[#1c1a17]/25 opacity-95 group-hover:opacity-98 transition-opacity duration-500" />
        </div>

        {/* Floating Status Badge (Solid High-Contrast Backgrounds for 100% Legibility) */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-[9px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md border ${
              status === "Completed"
                ? "bg-[#10b981] border-[#10b981]/20 text-white"
                : status === "Ongoing"
                ? "bg-sapl-blue border-sapl-blue/20 text-[#1c1a17]"
                : "bg-[#f59e0b] border-[#f59e0b]/20 text-[#1c1a17]"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Interactive Overlay trigger icon */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-sapl-blue text-white flex items-center justify-center shadow-lg shadow-sapl-blue/35">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Details Container */}
        <div className="relative z-10 p-6 flex flex-col gap-3 transition-transform duration-500 group-hover:translate-y-[-4px]">
          {/* Location & Category Header */}
          <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-navy-200">
            <span className="flex items-center gap-1 text-[#d5d1c8]">
              <MapPin className="w-3 h-3 text-sapl-blue shrink-0" />
              {location}
            </span>
            <span className="text-sapl-blue font-extrabold">{category}</span>
          </div>

          {/* Project Name */}
          <h3 className="font-sans text-xl font-extrabold tracking-tight text-white leading-tight">
            {name}
          </h3>

          {/* Description (Crisp white/cream text with line clamping for neatness) */}
          <p className="text-[#eae7e3]/90 text-xs leading-relaxed transition-all duration-500 line-clamp-2 group-hover:line-clamp-none opacity-90 group-hover:opacity-100">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}
