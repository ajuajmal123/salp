import React from "react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  iconName,
  features,
}: ServiceCardProps) {
  // Dynamically resolve Lucide Icon
  const IconComponent = Icons[iconName] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group relative bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 p-6 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 glow-border hover:-translate-y-1.5 flex flex-col justify-between h-full">
      {/* Structural Accent Top line */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3.5px] bg-sapl-blue transition-all duration-500" />

      <div>
        {/* Animated Icon Circle */}
        <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-navy-950 flex items-center justify-center border border-slate-100 dark:border-navy-800 group-hover:bg-sapl-blue/10 group-hover:border-sapl-blue/30 transition-colors duration-500 mb-4">
          {IconComponent && (
            <IconComponent className="w-6 h-6 text-sapl-blue transition-transform duration-500 group-hover:scale-110" />
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-lg font-bold tracking-tight text-navy-950 dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Bullet features */}
      <ul className="space-y-2 border-t border-slate-100 dark:border-navy-800 pt-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-xs font-semibold tracking-wide text-navy-800 dark:text-navy-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sapl-blue mr-2 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
