import { eventConfig } from "@/lib/event-config";

export default function Rules() {
  return (
    <section id="rules" className="section-padding border-t border-slate-800/50">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-3">
            Guidelines
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Rules & Requirements
          </h2>
        </div>

        <ul className="space-y-4">
          {eventConfig.rules.map((rule, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 card p-4"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm font-bold font-heading">
                {idx + 1}
              </span>
              <p className="text-slate-300 pt-1">{rule}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
