import { eventConfig } from "@/lib/event-config";

export default function Prizes() {
  return (
    <section id="prizes" className="section-padding border-t border-slate-800/50">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-3">
            Rewards
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Prizes & Recognition
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Glory awaits the sharpest minds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {eventConfig.prizes.map((prize, idx) => (
            <div
              key={idx}
              className={`card p-6 text-center relative ${
                prize.highlight
                  ? "border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-transparent scale-105 z-10"
                  : ""
              }`}
            >
              {prize.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold tracking-wide">
                  WINNER
                </div>
              )}
              <div
                className={`text-4xl font-heading font-bold mb-3 ${
                  prize.highlight ? "text-amber-400" : "text-cyan-400"
                }`}
              >
                {prize.place}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {prize.title}
              </h3>
              <p className="text-slate-400 text-sm">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
