import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPhp,
  SiSelenium,
  SiFigma,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinear,
  SiClickup,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { LuNetwork, LuBrain, LuMousePointer2 } from 'react-icons/lu';

const techIconMap: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  Tailwind: SiTailwindcss,
  'Tailwind CSS': SiTailwindcss,
  'REST APIs': LuNetwork,
  Javascript: SiJavascript,
  JavaScript: SiJavascript,
  Python: SiPython,
  PHP: SiPhp,
  Selenium: SiSelenium,
  Figma: SiFigma,
  'Digital Ocean': SiDigitalocean,
  Git: SiGit,
  Github: SiGithub,
  Gitlab: SiGitlab,
  Linear: SiLinear,
  Clickup: SiClickup,
  Claude: LuBrain,
  Cursor: LuMousePointer2,
  'Node.js': SiJavascript,
  MySQL: SiPostgresql,
};

const techColors: Record<string, string> = {
  React: '#61DAFB',
  'Next.js': '#FFFFFF',
  TypeScript: '#3178C6',
  Django: '#092E20',
  PostgreSQL: '#4169E1',
  Tailwind: '#06B6D4',
  'Tailwind CSS': '#06B6D4',
  Javascript: '#F7DF1E',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  PHP: '#777BB4',
  Selenium: '#43B02A',
  Figma: '#F24E1E',
  'Digital Ocean': '#0080FF',
  Git: '#F05032',
  Github: '#FFFFFF',
  Gitlab: '#FC6D26',
  Linear: '#5E6AD2',
  Clickup: '#7B68EE',
  Claude: '#D97757',
  Cursor: '#FFFFFF',
  'REST APIs': '#22D3EE',
  'Node.js': '#68A063',
  MySQL: '#00758F',
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 20, className = '' }: TechIconProps) {
  const Icon = techIconMap[name];
  const color = techColors[name] || '#6366F1';

  if (!Icon) {
    return (
      <span
        className={`font-bold text-xs ${className}`}
        style={{ color }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Icon
      size={size}
      className={className}
      style={{ color }}
      aria-label={name}
    />
  );
}

export function getTechColor(name: string): string {
  return techColors[name] || '#6366F1';
}
