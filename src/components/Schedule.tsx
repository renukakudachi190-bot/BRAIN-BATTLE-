import { eventConfig } from "@/lib/event-config";

export default function Schedule() {
  return (
    <section id="schedule" className="section-padding border-t border-slate-800/50">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-3">
            Timeline
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Event Schedule
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Mark your calendar. Arrive on time — the battle starts sharp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventConfig.schedule.map((item, idx) => (
            <div
              key={idx}
              className="card p-6 relative group"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide">
                {item.time}
              </div>
              <div className="pt-4">
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {idx < eventConfig.schedule.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-slate-700" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          Venue: <span className="text-slate-300">{eventConfig.venueFull}</span>
        </div>
      </div>
    </section>
  );
}
