'use client';

import { BoltIcon, CloudIcon, CommandLineIcon, CubeTransparentIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";

const stacks = [
  { name: "Next.js", icon: RocketLaunchIcon },
  { name: "React", icon: CubeTransparentIcon },
  { name: "Tailwind", icon: BoltIcon },
  { name: "TypeScript", icon: CommandLineIcon },
  { name: "Firebase / Supabase", icon: CloudIcon },
  { name: "Node.js", icon: CommandLineIcon }
];

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <Reveal className="space-y-2 text-center">
          <h2 className="section-heading">Tech Stack</h2>
          <p className="section-subtitle">
            Modern, reliable technologies chosen to deliver blazing speed, security, and effortless scalability.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {stacks.map((stack) => (
            <Reveal
              key={stack.name}
              className="card flex flex-col items-center justify-center gap-3 p-4 text-center"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/15 bg-white/5">
                <stack.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{stack.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
